import AiWriterDemo from './AiWriterDemo'
import AiSummarizerDemo from './AiSummarizerDemo'
import PromptBuilderDemo from './PromptBuilderDemo'
import EmailAssistantDemo from './EmailAssistantDemo'
import SmartPlannerDemo from './SmartPlannerDemo'
import CvBuilderDemo from './CvBuilderDemo'
import MeetingToTasksDemo from './MeetingToTasksDemo'
import TextTranslatorDemo from './TextTranslatorDemo'

const DEMOS = {
  'ai-writer': AiWriterDemo,
  'ai-summarizer': AiSummarizerDemo,
  'prompt-builder': PromptBuilderDemo,
  'email-assistant': EmailAssistantDemo,
  'smart-planner': SmartPlannerDemo,
  'cv-builder': CvBuilderDemo,
  'meeting-to-tasks': MeetingToTasksDemo,
  'text-translator': TextTranslatorDemo,
}

export default function ToolDemo({ slug }) {
  const Demo = DEMOS[slug]
  if (!Demo) return null
  return <Demo />
}
