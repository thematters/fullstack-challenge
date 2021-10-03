/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useRef, useState, useImperativeHandle } from 'react'

interface NotificationContent {
  type: 'ERROR' | 'WARNING' | 'SUCCESS',
  message: string,
  time: number
}

interface NotificationInterface {
  notificate: (content: NotificationContent) => Promise<void>,
}

export const context = React.createContext<React.RefObject<NotificationInterface | undefined>>({
  current: undefined
})

interface NotificationState {
  id: number,
  display: boolean,
  content?: NotificationContent
}

const Notification = React.forwardRef<NotificationInterface | undefined, {}>((_, ref) => {
  const [queue, setQueue] = useState<Array<NotificationState>>([])
  useImperativeHandle(ref, () => ({
    notificate: async (content) => {
      const notificationInfo = {
        id: Math.random(),
        display: false,
        content
      };
      setQueue(value => [notificationInfo, ...value]);
      await new Promise((res) => {
        setTimeout(() => {
          setQueue(value => {
            return value.map(item => {
              if (item === notificationInfo) item.display = true
              return item;
            })
          });
          res(undefined)
        }, 16.7);
      })
      if (notificationInfo.display) {
        await new Promise((res) => {
          setTimeout(() => {
            setQueue(value => {
              return value.map(item => {
                if (item === notificationInfo) item.display = false
                return item;
              })
            });
            res(undefined)
          }, content.time)
        });
        await new Promise((res) => {
          setTimeout(() => {
            setQueue(value => {
              return value.filter(item => {
                return item !== notificationInfo
              })
            });
            res(undefined)
          }, 330)
        });
      }
    }
  }), [])
  return (
    <div css={{
      zIndex: 1,
      position: 'fixed',
      top: '16px',
      right: '16px',
    }}>
      {queue.map(info => {
        const background = (
          info.content?.type === 'ERROR' ? 'red' :
          info.content?.type === 'WARNING' ? 'orange' :
          info.content?.type === 'SUCCESS' ? 'seagreen' :
          'black'
        )
        return (
          <div
            key={info.id}
            css={{
              background,
              color: 'white',
              marginBottom: '8px',
              padding: '0 8px',
              width: '300px',
              borderRadius: '4px',
              lineHeight: '36px',
              boxSizing: 'border-box',
              fontSize: '16px',
              transition: 'all 0.3s',
              cursor: 'pointer',
              height: info.display ? '36px': '0',
              opacity: info.display ? 1 : 0,
            }}
            onClick={() => {
              setQueue(value => {
                return value.map(item => {
                  if (item === info) item.display = false
                  return item;
                })
              });
            }}
          >
            {info.content?.message}
          </div>
        )
      })}
    </div>
  );
})

interface NotificationProviderProps {
  children: React.ReactNode
}

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const ref = useRef<NotificationInterface>()
  return (
    <context.Provider value={ref}>
      {children}
      <Notification ref={ref} />
    </context.Provider>
  )
}
