  import { Link } from 'react-router-dom'
import type { Course } from '../../data/courses'
import { cn } from '../../lib/utils'

interface CourseCardProps {
  course: Course
  to: string
}

export const CourseCard = ({ course, to }: CourseCardProps) => {
  return (
    <Link
      to={to}
      className={cn(
        'group flex items-center gap-4 rounded-3xl border-2 border-black bg-white p-4 transition-all duration-300',
        'shadow-[8px_8px_0_0_rgba(0,0,0,0.85)] hover:shadow-[14px_14px_0_0_rgba(0,0,0,0.95)]',
        'hover:-translate-y-1 hover:border-black hover:bg-[#ccff00]',
      )}
    >
      <div className="h-16 w-16 flex-shrink-0 rounded-2xl border-2 border-black bg-zlowy-bg transition-colors duration-300 group-hover:bg-black group-hover:text-white" />
      <div className="flex flex-col">
        <p className="font-display text-xl uppercase transition-colors duration-300 group-hover:text-black">{course.title}</p>
        <p className="text-sm text-neutral-600 transition-colors duration-300 group-hover:text-black line-clamp-2">{course.description}</p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-500 transition-colors duration-300 group-hover:text-black">
          Zlowy Certified
        </p>
      </div>
    </Link>
  )
}
