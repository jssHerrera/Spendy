export const SVGSprite = () => (
  <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* palette */}
      <symbol id="palette" viewBox="0 0 24 24">
        <g fill="none">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M2 8V6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0v-6"
          />
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="m10 8.243l3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25"
          />
          <path
            fill="currentColor"
            d="M18 22v-.75zm0-8v.75zm4 4h-.75zm-9 4.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-1.5-6.5H18v-1.5h-2.5zM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18zm1.5 0A4.75 4.75 0 0 0 18 13.25v1.5A3.25 3.25 0 0 1 21.25 18zM13 21.25H6v1.5h7zm5 0h-1v1.5h1z"
          />
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M7 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
          />
        </g>
      </symbol>

      {/* emoji-funny */}
      <symbol id="emoji-funny" viewBox="0 0 24 24">
        <g fill="none">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M8.913 15.934c1.258.315 2.685.315 4.122-.07s2.673-1.099 3.605-2.001"
          />
          <ellipse
            cx="14.509"
            cy="9.774"
            fill="currentColor"
            rx="1"
            ry="1.5"
            transform="rotate(-15 14.51 9.774)"
          />
          <ellipse
            cx="8.714"
            cy="11.328"
            fill="currentColor"
            rx="1"
            ry="1.5"
            transform="rotate(-15 8.714 11.328)"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M20.796 9.643c1.111 4.147 1.667 6.22.724 7.853s-3.016 2.19-7.163 3.3c-4.147 1.111-6.22 1.667-7.853.724s-2.19-3.016-3.3-7.163c-1.112-4.147-1.667-6.22-.724-7.853s3.016-2.19 7.163-3.3c4.147-1.112 6.22-1.667 7.853-.724c1.009.582 1.606 1.595 2.177 3.26"
          />
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="m13 16l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"
          />
        </g>
      </symbol>

      {/* Delete */}
      <symbol id="delete" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M22 12c0 3.771 0 5.657-1.204 6.828S17.654 20 13.78 20h-2.637c-2.227 0-3.341 0-4.27-.501c-.93-.502-1.52-1.42-2.701-3.259l-.681-1.06C2.497 13.634 2 12.86 2 12s.497-1.634 1.49-3.18l.68-1.06c1.181-1.838 1.771-2.757 2.701-3.259S8.915 4 11.142 4h2.637c3.875 0 5.813 0 7.017 1.172c.671.653.968 1.528 1.1 2.828M15.5 9.5l-5 5m0-5l5 5"
        />
      </symbol>

      {/* Edit */}
      <symbol id="edit" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
        >
          <path d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12v-1.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536" />
          <path d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829q-.308.395-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-2.983 2.982m-2.982 2.983c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9" />
        </g>
      </symbol>

      {/* arrow-down */}
      <symbol id="arrow-down" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="m8.303 12.404l3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z"
        />
        <path
          fill="currentColor"
          d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z"
          opacity=".5"
        />
      </symbol>

      {/* Google */}
      <symbol id="google" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M6 12a6 6 0 0 0 11.659 2H12v-4h9.805v4H21.8c-.927 4.564-4.962 8-9.8 8c-5.523 0-10-4.477-10-10S6.477 2 12 2a9.99 9.99 0 0 1 8.282 4.393l-3.278 2.295A6 6 0 0 0 6 12"
        />
      </symbol>
    </defs>
  </svg>
);
