import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

export interface Teacher {
  name: string;
  subjects: string[];
  experience: string;
  image: string;
  bio: string;
}

export function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <Card className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <img src={teacher.image} alt={teacher.name} className="h-full w-full object-cover" />
        <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary shadow-sm ring-1 ring-slate-200">
          <GraduationCap className="h-3.5 w-3.5 text-brand-amberDark" />
          {teacher.experience}
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold text-primary">{teacher.name}</h3>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {teacher.subjects.map((s) => (
            <Badge key={s} variant="outline" className="font-medium text-slate-600">
              {s}
            </Badge>
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{teacher.bio}</p>
      </CardContent>
    </Card>
  );
}
