"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const DataVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (!container) return

      canvas.width = container.offsetWidth
      canvas.height = 400
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Data points
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    const beforeData = [15, 18, 14, 20, 18, 17, 22, 19, 23]
    const afterData = [15, 22, 28, 35, 42, 50, 62, 75, 90]

    // Chart settings
    const padding = 40
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2

    // Animation settings
    let animationProgress = 0
    const animationDuration = 60 // frames

    // Draw function
    const draw = () => {
      if (!ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background
      ctx.fillStyle = "rgba(20, 20, 35, 0.3)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Grid
      ctx.strokeStyle = "rgba(40, 40, 60, 0.5)"
      ctx.lineWidth = 1

      // Horizontal grid lines
      for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i
        ctx.beginPath()
        ctx.moveTo(padding, y)
        ctx.lineTo(padding + chartWidth, y)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let i = 0; i < months.length; i++) {
        const x = padding + (chartWidth / (months.length - 1)) * i
        ctx.beginPath()
        ctx.moveTo(x, padding)
        ctx.lineTo(x, padding + chartHeight)
        ctx.stroke()

        // Month labels
        ctx.fillStyle = "rgba(180, 180, 200, 0.8)"
        ctx.font = "12px Inter, sans-serif"
        ctx.textAlign = "center"
        ctx.fillText(months[i], x, padding + chartHeight + 20)
      }

      // Y-axis labels
      ctx.textAlign = "right"
      for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * (5 - i)
        const value = (i * 20).toString()
        ctx.fillText(value, padding - 10, y + 4)
      }

      // Calculate max value for scaling
      const maxValue = Math.max(...afterData)

      // Draw "Before" line
      ctx.strokeStyle = "rgba(111, 0, 255, 0.6)"
      ctx.lineWidth = 3
      ctx.beginPath()

      for (let i = 0; i < beforeData.length; i++) {
        const x = padding + (chartWidth / (beforeData.length - 1)) * i
        const y = padding + chartHeight - (beforeData[i] / maxValue) * chartHeight * Math.min(animationProgress / 30, 1)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.stroke()

      // Draw "After" line
      ctx.strokeStyle = "rgba(255, 0, 128, 0.8)"
      ctx.lineWidth = 3
      ctx.beginPath()

      for (let i = 0; i < afterData.length; i++) {
        const x = padding + (chartWidth / (afterData.length - 1)) * i
        const y =
          padding + chartHeight - (afterData[i] / maxValue) * chartHeight * Math.min((animationProgress - 15) / 30, 1)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.stroke()

      // Draw points
      for (let i = 0; i < beforeData.length; i++) {
        const x = padding + (chartWidth / (beforeData.length - 1)) * i

        // Before points
        const beforeY =
          padding + chartHeight - (beforeData[i] / maxValue) * chartHeight * Math.min(animationProgress / 30, 1)
        ctx.fillStyle = "rgba(111, 0, 255, 0.8)"
        ctx.beginPath()
        ctx.arc(x, beforeY, 4, 0, Math.PI * 2)
        ctx.fill()

        // After points
        if (animationProgress > 15) {
          const afterY =
            padding + chartHeight - (afterData[i] / maxValue) * chartHeight * Math.min((animationProgress - 15) / 30, 1)
          ctx.fillStyle = "rgba(255, 0, 128, 0.8)"
          ctx.beginPath()
          ctx.arc(x, afterY, 4, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Legend
      ctx.fillStyle = "rgba(180, 180, 200, 0.8)"
      ctx.font = "14px Inter, sans-serif"
      ctx.textAlign = "left"

      // Before legend
      ctx.fillStyle = "rgba(111, 0, 255, 0.8)"
      ctx.beginPath()
      ctx.arc(padding, 30, 6, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = "rgba(180, 180, 200, 0.8)"
      ctx.fillText("Before QuantumPulse", padding + 15, 35)

      // After legend
      ctx.fillStyle = "rgba(255, 0, 128, 0.8)"
      ctx.beginPath()
      ctx.arc(padding + 180, 30, 6, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = "rgba(180, 180, 200, 0.8)"
      ctx.fillText("After QuantumPulse", padding + 195, 35)

      // Update animation
      if (animationProgress < animationDuration) {
        animationProgress++
        requestAnimationFrame(draw)
      }
    }

    // Start animation
    draw()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Data-Driven Results</h2>
          <p className="text-xl text-muted-foreground">
            We transform marketing metrics into business growth. Here's what our approach typically achieves:
          </p>
        </div>

        <div className="bg-card rounded-xl border border-border p-6 mb-8">
          <div className="relative">
            <canvas ref={canvasRef} className="w-full h-[400px]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="text-3xl font-bold text-primary mb-2">+287%</div>
            <div className="text-lg font-medium mb-1">Average ROAS Improvement</div>
            <p className="text-muted-foreground">For e-commerce clients within 90 days</p>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <div className="text-3xl font-bold text-primary mb-2">-42%</div>
            <div className="text-lg font-medium mb-1">Cost Per Acquisition</div>
            <p className="text-muted-foreground">Average reduction across all industries</p>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <div className="text-3xl font-bold text-primary mb-2">+68%</div>
            <div className="text-lg font-medium mb-1">Conversion Rate</div>
            <p className="text-muted-foreground">Average improvement after funnel optimization</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/projects" className="inline-flex items-center text-primary hover:underline font-medium">
            See detailed case studies
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DataVisualization
