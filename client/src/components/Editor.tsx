/** @jsx jsx */
import { jsx, Interpolation, Theme } from '@emotion/react'
import React, { useImperativeHandle } from 'react'
import { useQuill } from "react-quilljs";
import 'quill/dist/quill.snow.css';

interface Props {
  containerCss: Interpolation<Theme>,
  name: string,
  required: boolean,
}

export default React.forwardRef(({ containerCss, name, required }: Props, ref) => {
  const theme = 'snow';

  const modules = {
    toolbar: [ ['bold', 'italic', 'underline', 'strike'] ],
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
    get value () {
      return quill.root.innerHTML
    },
    set value (newValue: string) {
      if (quill) quill.root.innerHTML = newValue;
    },
  }), [quill, name])

  return (
    <div css={[{ width: '100%' }, containerCss]}>
      <div ref={quillRef} css={{ height: '300px' }} />
    </div>
  )
})
