"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BUSINESS, waLink } from "@/lib/constants";

const schema = z.object({
  parentName: z.string().min(2, "Sila masukkan nama penuh"),
  phone: z
    .string()
    .regex(/^(\+?60|0)1[0-9]-?\s?\d{7,8}$/, "Sila masukkan nombor telefon Malaysia yang sah"),
  childAge: z.string().min(1, "Sila pilih umur anak"),
  subject: z.string().min(1, "Sila pilih subjek"),
  message: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof schema>;

const AGE_OPTIONS = [
  { value: "5-7", label: "5 – 7 tahun" },
  { value: "8-10", label: "8 – 10 tahun" },
  { value: "11-12", label: "11 – 12 tahun" },
];

const SUBJECT_OPTIONS = [
  { value: "membaca", label: "Kelas Membaca" },
  { value: "bm", label: "Bahasa Melayu" },
  { value: "bi", label: "Bahasa Inggeris" },
  { value: "matematik", label: "Matematik" },
  { value: "sains", label: "Sains" },
  { value: "semua", label: "Semua Subjek (Pakej)" },
];

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      parentName: "",
      phone: "",
      childAge: "",
      subject: "",
      message: "",
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = form;

  const onSubmit = async (values: FormValues) => {
    const subjectLabel =
      SUBJECT_OPTIONS.find((o) => o.value === values.subject)?.label ?? values.subject;
    const ageLabel =
      AGE_OPTIONS.find((o) => o.value === values.childAge)?.label ?? values.childAge;

    const msg = [
      `Salam ${BUSINESS.short},`,
      "",
      `Saya ${values.parentName} berminat untuk mendaftar anak saya dalam kelas tuisyen.`,
      `• Umur anak: ${ageLabel}`,
      `• Subjek pilihan: ${subjectLabel}`,
      `• No. telefon: ${values.phone}`,
      values.message ? `• Mesej: ${values.message}` : "",
      "",
      "Boleh berikan maklumat lanjut? Terima kasih.",
    ]
      .filter(Boolean)
      .join("\n");

    toast.success("Terima kasih! Kami akan membuka WhatsApp untuk anda.", {
      description: "Sila lengkapkan pendaftaran melalui WhatsApp.",
    });

    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    reset();
  };

  const childAge = watch("childAge");
  const subject = watch("subject");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label htmlFor="parentName">
          Nama Ibu Bapa <span className="text-red-500">*</span>
        </Label>
        <Input
          id="parentName"
          placeholder="cth. Puan Nurul"
          {...register("parentName")}
          className="mt-1.5"
        />
        {errors.parentName && (
          <p className="mt-1.5 text-xs text-red-600">{errors.parentName.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone">
          No. Telefon <span className="text-red-500">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="cth. 013-946 9192"
          {...register("phone")}
          className="mt-1.5"
        />
        {errors.phone && (
          <p className="mt-1.5 text-xs text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label>
            Umur Anak <span className="text-red-500">*</span>
          </Label>
          <Select
            value={childAge}
            onValueChange={(v) => setValue("childAge", v, { shouldValidate: true })}
          >
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Pilih lingkungan umur" />
            </SelectTrigger>
            <SelectContent>
              {AGE_OPTIONS.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.childAge && (
            <p className="mt-1.5 text-xs text-red-600">{errors.childAge.message}</p>
          )}
        </div>

        <div>
          <Label>
            Subjek Pilihan <span className="text-red-500">*</span>
          </Label>
          <Select
            value={subject}
            onValueChange={(v) => setValue("subject", v, { shouldValidate: true })}
          >
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Pilih subjek" />
            </SelectTrigger>
            <SelectContent>
              {SUBJECT_OPTIONS.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.subject && (
            <p className="mt-1.5 text-xs text-red-600">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="message">Mesej Tambahan</Label>
        <Textarea
          id="message"
          placeholder="Ada sebarang pertanyaan khusus? (tidak wajib)"
          {...register("message")}
          className="mt-1.5"
          rows={4}
        />
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Button type="submit" variant="accent" size="lg" disabled={isSubmitting} className="gap-2">
          <Send className="h-4 w-4" />
          {isSubmitting ? "Menghantar..." : "Hantar & Buka WhatsApp"}
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2">
          <a href={waLink()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            WhatsApp Terus
          </a>
        </Button>
      </div>

      <p className="text-xs text-slate-500">
        Dengan menghantar borang ini, anda bersetuju kami menghubungi anda melalui WhatsApp atau
        telefon berkaitan pendaftaran kelas.
      </p>
    </form>
  );
}
