import {
  PenLine,
  FileText,
  Sparkles,
  Mail,
  CalendarCheck,
  FileUser,
  ClipboardList,
  Languages,
  ListChecks,
  BookOpen,
  Briefcase,
  Workflow,
} from 'lucide-react'

export const iconMap = {
  PenLine,
  FileText,
  Sparkles,
  Mail,
  CalendarCheck,
  FileUser,
  ClipboardList,
  Languages,
  ListChecks,
  BookOpen,
  Briefcase,
  Workflow,
}

export function getIcon(name) {
  return iconMap[name] || Sparkles
}
