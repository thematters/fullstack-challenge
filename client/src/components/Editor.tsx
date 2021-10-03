/** @jsx jsx */
import { jsx, Interpolation, Theme } from '@emotion/react'
import React, { useEffect, useImperativeHandle, useRef } from 'react'
import { useQuill } from "react-quilljs";
import 'quill/dist/quill.snow.css';

interface Props {
  containerCss: Interpolation<Theme>,
  name: string,
  required: boolean,
}

export default React.forwardRef(({ containerCss, name, required }: Props, ref) => {
  const hiddenInputRef = useRef<HTMLInputElement | null>(null)
  const theme = 'snow';

  const modules = {
    toolbar: [['bold', 'italic', 'underline', 'strike']],
  };

  const formats = ['bold', 'italic', 'underline', 'strike'];

  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
    required: required
  });

  useImperativeHandle(ref, () => ({
    name: name,
    get value() {
      return quill.root.innerHTML
    },
    set value(newValue: string) {
      if (quill) quill.root.innerHTML = newValue;
    },
  }), [quill, name])
  useEffect(() => {
    if (quill) {
      const syncInput = function() {
        if (hiddenInputRef.current) {
          const html = quill.root.innerHTML
          const value = html !== '<p><br></p>' ? quill.root.innerHTML : '';
          hiddenInputRef.current.value = value;
        }
      }
      quill.on('text-change', syncInput)
      syncInput()
      return () => quill.off('text-change', syncInput)
    }
  }, [quill])
  return (
    <>
      <div css={[{ width: '100%' }, containerCss]}>
        <div ref={quillRef} css={{ height: '300px' }} />
        {required && (
          <input
            css={{
              width: '100%',
              display: 'block',
              height: '1px',
              padding: '0',
              border: 'none',
              marginTop: '-1px',
            }}
            onFocus={(event) => {
              event.target.blur()
            }}
            ref={hiddenInputRef}
            required
          />
        )}
      </div>
      
    </>
  )
})
