import { PulsingDot } from '../atoms/Dot'

export const FilterHeading = ({
  title,
  dirty = true,
}: {
  title: string
  dirty: boolean
}) => (
  <div className="relative inline-block font-semibold ">
    {dirty && <PulsingDot />}
    {title}
  </div>
)
