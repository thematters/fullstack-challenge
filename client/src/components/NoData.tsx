/** @jsx jsx */
import { jsx, Interpolation, Theme } from '@emotion/react'

interface Props {
  containerCss?: Interpolation<Theme>
  imageCss?: Interpolation<Theme>
}

const NoData = ({ containerCss, imageCss }: Props) => {
  return (
    <div css={[
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      },
      containerCss
    ]}>
      <img css={[{ marginBottom: '32px' }, imageCss]} src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjNjY2NjY2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgeD0iMHB4IiB5PSIwcHgiPjx0aXRsZT5fPC90aXRsZT48ZyBkYXRhLW5hbWU9IkxheWVyIDM0Ij48cGF0aCBkPSJNMzEuNDE0LDMybDQuMjkzLTQuMjkzYTEsMSwwLDAsMC0xLjQxNC0xLjQxNEwzMCwzMC41ODZsLTQuMjkzLTQuMjkzYTEsMSwwLDAsMC0xLjQxNCwxLjQxNEwyOC41ODYsMzJsLTQuMjkzLDQuMjkzYTEsMSwwLDEsMCwxLjQxNCwxLjQxNEwzMCwzMy40MTRsNC4yOTMsNC4yOTNhMSwxLDAsMCwwLDEuNDE0LTEuNDE0WiI+PC9wYXRoPjxwYXRoIGQ9Ik01NC42MSw1MS45LDUxLDQ4LjI5VjE4Ljg2YTMuMDEyLDMuMDEyLDAsMCwwLS45NC0yLjE4TDM5LjI3LDYuNDVhMy4wMDUsMy4wMDUsMCwwLDAtMi4wNy0uODJIMTJhMy4wMDksMy4wMDksMCwwLDAtMywzVjU1Ljk0YTMsMywwLDAsMCwzLDNINDhhMi45OSwyLjk5LDAsMCwwLDIuNzItMS43NSwyLjk4MSwyLjk4MSwwLDAsMCwxLjMzLjMxLDMuMDM3LDMuMDM3LDAsMCwwLDIuMTUtLjg5bC40MS0uNDFBMy4wNTQsMy4wNTQsMCwwLDAsNTQuNjEsNTEuOVpNNDcuNSwxN0g0MGExLDEsMCwwLDEtMS0xVjguOTVaTTQ4LDU2Ljk0SDEyYTEsMSwwLDAsMS0xLTFWOC42M2ExLDEsMCwwLDEsMS0xSDM3VjE2YTMsMywwLDAsMCwzLDNoOVY0Ni4zbC0zLjQyLTMuNDJhMS4yOTIsMS4yOTIsMCwwLDAtMS44MiwwbC0uNzA3LjcwNy0zLjE2LTMuMTZhMTMuMTA4LDEzLjEwOCwwLDEsMC0xLjQxNCwxLjQxNEw0MS42MzksNDVsLS43NTkuNzU5YTEuMywxLjMsMCwwLDAsMCwxLjgzTDQ5LDU1Ljcxdi4yM0ExLDEsMCwwLDEsNDgsNTYuOTRaTTMwLDQzQTExLDExLDAsMSwxLDQxLDMyLDExLjAwNywxMS4wMDcsMCwwLDEsMzAsNDNaTTUzLjIsNTQuNzlsLS40MS40MWExLjA1LDEuMDUsMCwwLDEtMS40NywwTDUxLDU0Ljg4bC0yLTItNi4yMS02LjIxLDEuODgtMS44OEw0OSw0OS4xMmwyLDIsMi4yLDIuMkExLjA1LDEuMDUsMCwwLDEsNTMuMiw1NC43OVoiPjwvcGF0aD48L2c+PC9zdmc+" />
      No Data
    </div>
  )
}

export default NoData
