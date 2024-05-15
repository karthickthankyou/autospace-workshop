import TabMui, { TabProps } from '@mui/material/Tab'
import TabsMui, { TabsProps } from '@mui/material/Tabs'

export const Tabs = (props: TabsProps) => {
  return (
    <TabsMui
      classes={{
        indicator: 'bg-black',
        flexContainer: 'gap-4',
        root: 'min-h-0 py-2',
      }}
      {...props}
    />
  )
}
export const Tab = (props: TabProps) => {
  return (
    <TabMui
      disableRipple
      classes={{
        root: 'px-0 py-2 min-w-0 min-h-0 capitalize z-10',
        selected: 'text-black font-semibold',
      }}
      {...props}
    />
  )
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  )
}
