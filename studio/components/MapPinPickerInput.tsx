import React, { useEffect, useState } from 'react'
import { set, useClient } from 'sanity'
import { Card, Box, Text, Flex, Spinner } from '@sanity/ui'

export function MapPinPickerInput(props: any) {
  const { value, onChange } = props
  const client = useClient({ apiVersion: '2024-01-01' })
  const [mapUrl, setMapUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const topPercent = value?.topPercent ?? 20
  const leftPercent = value?.leftPercent ?? 50

  useEffect(() => {
    client
      .fetch(`*[_type == "homePage"][0].mapImage.asset->url`)
      .then((url) => {
        if (url) setMapUrl(url)
        setLoading(false)
      })
      .catch(() => setLoading(false))
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
    <Card padding={2} radius={2} shadow={1} border style={{ backgroundColor: '#ffffff', maxWidth: '650px' }}>
      {/* Contenedor del Mapa Interactivo 1:1 con la Web */}
      <Box
        onClick={handleMapClick}
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '220px',
          cursor: 'crosshair',
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundColor: '#f8fafc',
          border: '1.5px solid #cbd5e1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {loading && (
          <Flex align="center" justify="center" gap={2} padding={4}>
            <Spinner size={2} />
            <Text size={1} muted>Cargando mapa...</Text>
          </Flex>
        )}

        {mapUrl ? (
          <img
            src={mapUrl}
            alt="Mapa 3D de Venezuela"
            style={{ width: '100%', height: 'auto', display: 'block', pointerEvents: 'none' }}
          />
        ) : (
          !loading && (
            <Box padding={4} style={{ textAlign: 'center' }}>
              <Text size={1} style={{ color: '#e11d48', fontWeight: '600' }}>
                📸 Sube la imagen del mapa 3D en el campo "Imagen del Mapa de Venezuela" para verla aquí.
              </Text>
            </Box>
          )
        )}

        {/* Pin Amarillo Interactivo */}
        {mapUrl && (
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
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: '#fad201',
                border: '2.5px solid #ffffff',
                boxShadow: '0 4px 10px rgba(0,0,0,0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#062653',
                }}
              />
            </div>
          </div>
        )}
      </Box>
    </Card>
  )
}
