"use client"

import { useEffect, useRef } from "react"

export default function WaterWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let time = 0
    const wave = {
      y: canvas.height / 2,
      length: 0.01,
      amplitude: 100,
      frequency: 0.01,
    }

    const strokeColor = "rgba(255, 255, 255, 0.3)"
    const fillColor = "rgba(255, 255, 255, 0.1)"

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(i, wave.y + Math.sin(i * wave.length + time) * wave.amplitude * Math.sin(time))
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.closePath()
      ctx.fillStyle = fillColor
      ctx.strokeStyle = strokeColor
      ctx.stroke()
      ctx.fill()

      time += wave.frequency

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}