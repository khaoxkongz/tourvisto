import type {
  GlobalOptions as ConfettiGlobalOptions,
  CreateTypes as ConfettiInstance,
  Options as ConfettiOptions,
} from "canvas-confetti"
import confetti from "canvas-confetti"
import * as React from "react"

import { Button } from "@/components/ui/button"

type Api = {
  fire: (options?: ConfettiOptions) => void
}

type Props = React.ComponentPropsWithRef<"canvas"> & {
  options?: ConfettiOptions
  globalOptions?: ConfettiGlobalOptions
  manualstart?: boolean
  children?: React.ReactNode
}

export type ConfettiRef = Api | null

const ConfettiContext = React.createContext<Api>({} as Api)

// Define component first
const Confetti = React.forwardRef<ConfettiRef, Props>((props, ref) => {
  const { options, globalOptions = { resize: true, useWorker: true }, manualstart = false, children, ...rest } = props
  const instanceRef = React.useRef<ConfettiInstance | null>(null)

  const canvasRef = React.useCallback(
    (node: HTMLCanvasElement) => {
      if (node !== null) {
        if (instanceRef.current) return
        instanceRef.current = confetti.create(node, {
          ...globalOptions,
          resize: true,
        })
      } else {
        if (instanceRef.current) {
          instanceRef.current.reset()
          instanceRef.current = null
        }
      }
    },
    [globalOptions]
  )

  const fire = React.useCallback(
    async (opts = {}) => {
      try {
        await instanceRef.current?.({ ...options, ...opts })
      } catch (error) {
        console.error("Confetti error:", error)
      }
    },
    [options]
  )

  const api = React.useMemo(
    () => ({
      fire,
    }),
    [fire]
  )

  React.useImperativeHandle(ref, () => api, [api])

  React.useEffect(() => {
    if (!manualstart) {
      ;(async () => {
        try {
          await fire()
        } catch (error) {
          console.error("Confetti effect error:", error)
        }
      })()
    }
  }, [manualstart, fire])

  return (
    <ConfettiContext.Provider value={api}>
      <canvas ref={canvasRef} {...rest} />
      {children}
    </ConfettiContext.Provider>
  )
})

const ConfettiButton = ({
  options,
  children,
  ...props
}: React.ComponentProps<"button"> & {
  options?: ConfettiOptions & ConfettiGlobalOptions & { canvas?: HTMLCanvasElement }
  children?: React.ReactNode
}) => {
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const rect = event.currentTarget.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2
      await confetti({
        ...options,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
      })
    } catch (error) {
      console.error("Confetti button error:", error)
    }
  }

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}

export { Confetti, ConfettiButton }
