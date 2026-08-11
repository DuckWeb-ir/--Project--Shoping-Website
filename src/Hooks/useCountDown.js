import { useEffect, useState } from "react"

const useCountDown = (duration = 120) => {

    const [TimeLeft, setTimeLeft] = useState(0)
    const [isRunning, setIsRunning] = useState(false)


    useEffect(() => {
        if (!isRunning) return

        if (TimeLeft <= 0) {
            setIsRunning(false)
            return
        }

        const interval = setInterval(() => {
            setTimeLeft(prev => prev - 1)
        }, 1000);

        return () => clearInterval(interval)

    }, [TimeLeft, isRunning])

    const restartTimer = () => {
        setTimeLeft(duration)
        setIsRunning(true)
    }

    const getFormattedTime = () => {
        const minutes = Math.floor(TimeLeft / 60)
        const seconds = TimeLeft % 60

        return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }


    return {
        TimeLeft,
        isRunning,
        isExpired: TimeLeft === 0,
        restartTimer,
        getFormattedTime
    }
}

export default useCountDown