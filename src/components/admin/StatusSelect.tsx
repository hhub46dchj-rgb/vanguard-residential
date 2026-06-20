"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import { Select } from "@/components/ui/Field";
import { updateLeadStatus, type LeadKind } from "@/server/admin-actions";
import { LEAD_STATUSES } from "@/lib/types";

/** Inline status dropdown that calls the server action + toasts. */
export function StatusSelect({
  kind,
  id,
  status,
}: {
  kind: LeadKind;
  id: string;
  status: string;
}) {
  const [pending, startTransition] = useTransition();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value;
    startTransition(async () => {
      const res = await updateLeadStatus(kind, id, next);
      if (res.ok) toast.success(`Marked as ${next}`);
      else toast.error(res.error);
    });
  }

  return (
    <Select
      defaultValue={status}
      onChange={onChange}
      disabled={pending}
      aria-label="Lead status"
      className="h-9 min-w-[8.5rem] text-xs"
    >
      {LEAD_STATUSES.map((s) => (
        <option key={s} value={s}>
          {s.charAt(0).toUpperCase() + s.slice(1)}
        </option>
      ))}
    </Select>
  );
}
