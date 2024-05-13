import {
  ToastContainer as ReactToastifyContainer,
  toast,
  Slide,
} from 'react-toastify'

export const ToastContainer = () => (
  <ReactToastifyContainer transition={Slide} />
)

export { toast }
