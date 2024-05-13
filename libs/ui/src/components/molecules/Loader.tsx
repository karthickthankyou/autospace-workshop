import { IconRotateClockwise2 } from '@tabler/icons-react'
import { AlertSection } from './AlertSection'

export const Loader = () => <IconRotateClockwise2 className="animate-spin" />
export const LoaderPanel = ({ text }: { text?: string }) => (
  <AlertSection title={text}>
    <Loader />
  </AlertSection>
)
