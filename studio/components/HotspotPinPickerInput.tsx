import React, { useEffect, useState } from 'react'
import { set, useClient } from 'sanity'
import { Card, Box, Text, Flex, Spinner } from '@sanity/ui'

export function HotspotPinPickerInput(props: any) {
  const { value, onChange } = props
  const client = useClient({ apiVersion: '2024-01-01' })
  const [bgUrl, setBgUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const topPercent = value?.topPercent ?? 50
  const leftPercent = value?.leftPercent ?? 50

  useEffect(() => {
    client
      .fetch(`*[_type == "homePage"][0].interactiveBackgroundImage.asset->url`)
      .then((url) => {
        if (url) {
          setBgUrl(url)
        } else {
          setBgUrl('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070')
        }
        setLoading(false)
      })
      .catch(() => {
        setBgUrl('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070')
        setLoading(false)
      })
  }, [client])

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const calcLeft = Math.round((x / rect.width) * 100)
    const calcTop = Math.round((y / rect.height) * 100)

    onChange(
      set({
        topPercent: Math.max(0, Math.min(100, calcTop)),
        leftPercent: Math.max(0, Math.min(100, calcLeft)),
      })
    )
  }

  return (
    <Card padding={2} radius={2} shadow={1} border style={{ backgroundColor: '#ffffff', maxWidth: '750px' }}>
      <Box padding={2}>
        <Text size={1} weight="bold" style={{ marginBottom: '8px', display: 'block' }}>
          📍 Haz clic en la imagen para ubicar este Hotspot (Posición actual: Vertical {topPercent}%, Horizontal {leftPercent}%)
        </Text>
      </Box>

      <Box style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: '#0f172a', border: '1.5px solid #cbd5e1' }}>
        {loading && (
          <Flex align="center" justify="center" gap={2} padding={4} style={{ minHeight: '200px' }}>
            <Spinner size={2} />
            <Text size={1} style={{ color: '#ffffff' }}>Cargando imagen interactiva...</Text>
          </Flex>
        )}

        {bgUrl && (
          <div
            onClick={handleMapClick}
            style={{
              position: 'relative',
              width: '100%',
              cursor: 'crosshair',
              lineHeight: 0,
            }}
          >
            <img
              src={bgUrl}
              alt="Fondo de Hotspots"
              style={{ width: '100%', height: 'auto', display: 'block', pointerEvents: 'none', opacity: 0.9 }}
            />

            {/* Pin Interactivo del Hotspot */}
            <div
              style={{
                position: 'absolute',
                top: `${topPercent}%`,
                left: `${leftPercent}%`,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                zIndex: 20,
                transition: 'all 0.15s ease-out',
              }}
            >
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#3b82f6',
                  border: '3px solid #ffffff',
                  boxShadow: '0 0 15px rgba(59, 130, 246, 0.8), 0 4px 10px rgba(0,0,0,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </Box>
    </Card>
  )
}
