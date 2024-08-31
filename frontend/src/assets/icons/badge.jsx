function Badge({level, enabled}){
    if (enabled) {
        return (
           <>
           {
             level === "0" && <svg width="62" height="68" viewBox="0 0 62 68" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fillRule="evenodd" clipRule="evenodd" d="M48 56C49.1046 56 50 56.8954 50 58C50 59.1046 49.1046 60 48 60H30C29.8824 60 29.7673 59.9899 29.6553 59.9704C23.2305 59.687 17.3308 57.3828 12.5761 53.6779C12.1894 53.3766 11.6067 52.8771 11.1748 52.5013C10.8054 52.1799 10.3333 52 9.84362 52H5C3.89543 52 3 51.1046 3 50C3 48.8954 3.89543 48 5 48H7C8.10457 48 9 47.1046 9 46C9 44.8954 8.10457 44 7 44H2C0.89543 44 0 43.1046 0 42C0 40.8954 0.89543 40 2 40H3C4.10457 40 5 39.1046 5 38C5 36.8954 4.10457 36 3 36C2.1913 36 1.49962 35.4171 1.36506 34.6196C1.31617 34.3299 1.27734 34.0966 1.27093 34.0492C1.09227 32.7249 1 31.3732 1 30C1 13.4315 14.4315 0 31 0C36 0 41 0 46 0C47.1046 0 48 0.89543 48 2C48 3.10457 47.1046 4 46 4H43C41.8954 4 41 4.89543 41 6C41 7.10457 41.8954 8 43 8H55C56.1046 8 57 8.89543 57 10C57 11.1038 56.1058 11.9988 55.0022 12L52 12C50.8954 12 50 12.8954 50 14C50 15.1046 50.8954 16 52 16H56.306C57.0624 16 57.7556 16.4259 58.0835 17.1075C58.2807 17.5171 58.488 17.959 58.6237 18.2783C60.1536 21.8793 61 25.8408 61 30C61 31.3068 60.9164 32.5942 60.7544 33.8569C60.7271 34.0692 60.6853 34.3418 60.6398 34.6208C60.5093 35.4213 59.8111 36 59 36C57.8954 36 57 36.8954 57 38C57 39.1046 57.8954 40 59 40H60C61.1046 40 62 40.8954 62 42C62 43.1046 61.1046 44 60 44H58.7162C57.9901 44 57.3224 44.3942 56.9597 45.0232C56.7241 45.4317 56.4621 45.8761 56.2675 46.1794C55.8114 46.8903 55.326 47.5807 54.8132 48.2489C54.2981 48.9201 53.7553 49.5688 53.1864 50.1934C52.8743 50.5362 52.3685 51.044 51.974 51.4341C51.605 51.799 51.1061 52 50.5871 52H45C43.8954 52 43 52.8954 43 54C43 55.0969 43.883 55.9875 44.9769 55.9999L48 56Z" fill="url(#paint0_linear_62_366)"/>
             <g opacity="0.1">
             <path fillRule="evenodd" clipRule="evenodd" d="M27.4733 7.5623C29.5762 6.03444 32.4238 6.03444 34.5267 7.56231L51.2497 19.7123C53.3526 21.2401 54.2326 23.9483 53.4293 26.4205L47.0417 46.0795C46.2385 48.5517 43.9347 50.2254 41.3354 50.2254H20.6646C18.0653 50.2254 15.7615 48.5517 14.9583 46.0795L8.57067 26.4205C7.76742 23.9483 8.64737 21.2401 10.7503 19.7123L27.4733 7.5623Z" fill="#0E995E" style={{ mixBlendMode: 'multiply' }}/>
             </g>
             <g filter="url(#filter0_d_62_366)">
             <path fillRule="evenodd" clipRule="evenodd" d="M23 30H39V62.3364C39 63.0906 38.1969 63.5734 37.5308 63.2195L31 59.75L24.4692 63.2195C23.8031 63.5734 23 63.0906 23 62.3364V30Z" fill="#12AAB5"/>
             </g>
             <mask id="mask0_62_366" mask-type="luminance" maskUnits="userSpaceOnUse" x="23" y="30" width="16" height="34">
             <path fillRule="evenodd" clipRule="evenodd" d="M23 30H39V62.3364C39 63.0906 38.1969 63.5734 37.5308 63.2195L31 59.75L24.4692 63.2195C23.8031 63.5734 23 63.0906 23 62.3364V30Z" fill="white"/>
             </mask>
             <g mask="url(#mask0_62_366)">
             <path fillRule="evenodd" clipRule="evenodd" d="M27 46H35V64H27V46Z" fill="white"/>
             </g>
             <path style={{ mixBlendMode: 'multiply' }} opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M28.6489 10.7082C30.0508 9.68963 31.9492 9.68963 33.3511 10.7082L50.5232 23.1844C51.9251 24.203 52.5117 26.0085 51.9762 27.6565L45.4171 47.8435C44.8816 49.4916 43.3458 50.6074 41.6129 50.6074H20.3871C18.6542 50.6074 17.1184 49.4916 16.5829 47.8435L10.0238 27.6565C9.48826 26.0084 10.0749 24.203 11.4768 23.1844L28.6489 10.7082Z" fill="#18AC6C"/>
             <path fillRule="evenodd" clipRule="evenodd" d="M28.6489 8.7082C30.0508 7.68963 31.9492 7.68963 33.3511 8.7082L50.5232 21.1844C51.9251 22.203 52.5117 24.0085 51.9762 25.6565L45.4171 45.8435C44.8816 47.4916 43.3458 48.6074 41.6129 48.6074H20.3871C18.6542 48.6074 17.1184 47.4916 16.5829 45.8435L10.0238 25.6565C9.48826 24.0084 10.0749 22.203 11.4768 21.1844L28.6489 8.7082Z" fill="url(#paint1_linear_62_366)"/>
             <mask id="mask1_62_366" mask-type="luminance" maskUnits="userSpaceOnUse" x="9" y="7" width="44" height="42">
             <path fillRule="evenodd" clipRule="evenodd" d="M28.6489 8.7082C30.0508 7.68963 31.9492 7.68963 33.3511 8.7082L50.5232 21.1844C51.9251 22.203 52.5117 24.0085 51.9762 25.6565L45.4171 45.8435C44.8816 47.4916 43.3458 48.6074 41.6129 48.6074H20.3871C18.6542 48.6074 17.1184 47.4916 16.5829 45.8435L10.0238 25.6565C9.48826 24.0084 10.0749 22.203 11.4768 21.1844L28.6489 8.7082Z" fill="white"/>
             </mask>
             <g mask="url(#mask1_62_366)">
             <path d="M33.0571 9.11278C31.8304 8.22152 30.1694 8.22152 28.9426 9.11278L11.7706 21.589C10.5439 22.4802 10.0306 24.06 10.4992 25.5021L17.0583 45.689C17.5269 47.1311 18.8707 48.1075 20.387 48.1075H41.6128C43.1291 48.1075 44.4729 47.1311 44.9415 45.689L51.5006 25.5021C51.9692 24.06 51.4559 22.4802 50.2292 21.589L33.0571 9.11278Z" stroke="#E67515"/>
             <path d="M44.9414 45.6889L51.5005 25.502" stroke="#F68A2C" strokeLinecap="round"/>
             <path d="M10.4993 25.502L17.0584 45.6889" stroke="#F68A2C" strokeLinecap="round"/>
             <path d="M51.5006 25.5021C51.9692 24.06 51.4559 22.4802 50.2292 21.589L33.0571 9.11278C31.8304 8.22152 30.1694 8.22152 28.9426 9.11278L11.7706 21.589C10.5439 22.4802 10.0306 24.06 10.4992 25.5021" stroke="#FAA953" strokeLinecap="round"/>
             <path opacity="0.3" d="M33.0573 9.11278C31.8306 8.22152 30.1695 8.22152 28.9428 9.11278L11.7708 21.589" stroke="white" strokeLinecap="round"/>
             <path d="M28.9427 9.11279L24.6497 12.2318" stroke="white" strokeLinecap="round"/>
             </g>
             <g filter="url(#filter1_d_62_366)">
             <path fillRule="evenodd" clipRule="evenodd" d="M29.8244 14.8541C30.5254 14.3448 31.4746 14.3448 32.1756 14.8541L45.0413 24.2016C45.7423 24.7109 46.0356 25.6136 45.7679 26.4377L40.8536 41.5623C40.5858 42.3864 39.8179 42.9443 38.9515 42.9443H23.0485C22.1821 42.9443 21.4142 42.3864 21.1464 41.5623L16.2321 26.4377C15.9644 25.6136 16.2577 24.7109 16.9587 24.2016L29.8244 14.8541Z" fill="url(#paint2_linear_62_366)"/>
             <path d="M32.4695 14.4496C31.5932 13.813 30.4068 13.813 29.5305 14.4496L16.6648 23.7971C15.7886 24.4337 15.4219 25.5621 15.7566 26.5922L20.6709 41.7168C21.0056 42.7469 21.9655 43.4443 23.0485 43.4443H38.9515C40.0345 43.4443 40.9944 42.7469 41.3291 41.7168L46.2434 26.5922C46.5781 25.5621 46.2114 24.4337 45.3352 23.7971L32.4695 14.4496Z" stroke="#E86A00" stopOpacity="0.06"/>
             </g>
             <mask id="mask2_62_366" mask-type="luminance" maskUnits="userSpaceOnUse" x="16" y="14" width="30" height="29">
             <path fillRule="evenodd" clipRule="evenodd" d="M29.8244 14.8541C30.5254 14.3448 31.4746 14.3448 32.1756 14.8541L45.0413 24.2016C45.7423 24.7109 46.0356 25.6136 45.7679 26.4377L40.8536 41.5623C40.5858 42.3864 39.8179 42.9443 38.9515 42.9443H23.0485C22.1821 42.9443 21.4142 42.3864 21.1464 41.5623L16.2321 26.4377C15.9644 25.6136 16.2577 24.7109 16.9587 24.2016L29.8244 14.8541Z" fill="white"/>
             </mask>
             <g mask="url(#mask2_62_366)">
             <path fillRule="evenodd" clipRule="evenodd" d="M31 30L15 34V26L31 30ZM31 30L35 14H27L31 30ZM31 30L47 26V34L31 30ZM31 30L39.4853 15.8579L45.1421 21.5147L31 30ZM31 30L39.4853 44.1421L45.1421 38.4853L31 30ZM31 30L27 46H35L31 30ZM31 30L22.5147 44.1421L16.8579 38.4853L31 30Z" fill="url(#paint3_linear_62_366)"/>
             <path d="M22.5147 15.8579L16.8579 21.5147L31 30L22.5147 15.8579Z" fill="url(#paint4_linear_62_366)"/>
             <path d="M28.5102 16.4268C27.8159 16.9312 27.2798 17.3207 26.9019 17.5953" stroke="white" strokeLinecap="round"/>
             </g>
             <g filter="url(#filter2_d_62_366)">
             <path d="M28.4498 26.4901L31 22.769L33.5502 26.4901L37.8772 27.7656L35.1263 31.3409L35.2503 35.8502L31 34.3388L26.7497 35.8502L26.8737 31.3409L24.1228 27.7656L28.4498 26.4901Z" fill="white"/>
             <path d="M31.8249 22.2037C31.6384 21.9317 31.3298 21.769 31 21.769C30.6702 21.769 30.3616 21.9317 30.1751 22.2037L27.8259 25.6314L23.84 26.8064C23.5237 26.8997 23.2737 27.1429 23.1717 27.4566C23.0698 27.7703 23.1291 28.114 23.3303 28.3754L25.8643 31.6688L25.75 35.8227C25.741 36.1524 25.895 36.4654 26.1619 36.6592C26.4287 36.8531 26.7739 36.9029 27.0847 36.7924L31 35.4001L34.9153 36.7924C35.226 36.9029 35.5713 36.8531 35.8381 36.6592C36.1049 36.4654 36.259 36.1524 36.2499 35.8227L36.1357 31.6688L38.6697 28.3754C38.8708 28.114 38.9301 27.7703 38.8282 27.4566C38.7263 27.1429 38.4763 26.8997 38.1599 26.8064L34.174 25.6314L31.8249 22.2037Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
             </g>
             <g filter="url(#filter3_i_62_366)">
             <path d="M28.4498 26.4901L31 22.769L33.5502 26.4901L37.8772 27.7656L35.1263 31.3409L35.2503 35.8502L31 34.3388L26.7497 35.8502L26.8737 31.3409L24.1228 27.7656L28.4498 26.4901Z" fill="url(#paint5_linear_62_366)"/>
             </g>
             <defs>
             <filter id="filter0_d_62_366" x="21" y="30" width="20" height="37.3379" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
             <feFlood floodOpacity="0" result="BackgroundImageFix"/>
             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
             <feOffset dy="2"/>
             <feGaussianBlur stdDeviation="1"/>
             <feColorMatrix type="matrix" values="0 0 0 0 0.333333 0 0 0 0 0.819608 0 0 0 0 0.615686 0 0 0 0.2 0"/>
             <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_366"/>
             <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_366" result="shape"/>
             </filter>
             <filter id="filter1_d_62_366" x="13.134" y="12.4722" width="35.7319" height="34.4722" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
             <feFlood floodOpacity="0" result="BackgroundImageFix"/>
             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
             <feOffset dy="1"/>
             <feGaussianBlur stdDeviation="1"/>
             <feColorMatrix type="matrix" values="0 0 0 0 0.95 0 0 0 0 0.442079 0 0 0 0 0 0 0 0 0.8 0"/>
             <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_366"/>
             <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_366" result="shape"/>
             </filter>
             <filter id="filter2_d_62_366" x="20.1228" y="19.769" width="21.7544" height="21.0811" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
             <feFlood floodOpacity="0" result="BackgroundImageFix"/>
             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
             <feOffset dy="1"/>
             <feGaussianBlur stdDeviation="1"/>
             <feColorMatrix type="matrix" values="0 0 0 0 0.643137 0 0 0 0 0.262856 0 0 0 0 0.0196078 0 0 0 0.2 0"/>
             <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_366"/>
             <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_366" result="shape"/>
             </filter>
             <filter id="filter3_i_62_366" x="24.1228" y="22.769" width="13.7544" height="14.0811" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
             <feFlood floodOpacity="0" result="BackgroundImageFix"/>
             <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
             <feOffset dy="1"/>
             <feGaussianBlur stdDeviation="0.5"/>
             <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
             <feColorMatrix type="matrix" values="0 0 0 0 0.921569 0 0 0 0 0.447059 0 0 0 0 0.105882 0 0 0 0.4 0"/>
             <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_366"/>
             </filter>
             <linearGradient id="paint0_linear_62_366" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
             <stop stopColor="#60DCA7"/>
             <stop offset="1" stopColor="#54D09C"/>
             </linearGradient>
             <linearGradient id="paint1_linear_62_366" x1="8" y1="7" x2="8" y2="53" gradientUnits="userSpaceOnUse">
             <stop stopColor="#FD9C43"/>
             <stop offset="1" stopColor="#F27E1D"/>
             </linearGradient>
             <linearGradient id="paint2_linear_62_366" x1="15" y1="14" x2="15" y2="46" gradientUnits="userSpaceOnUse">
             <stop stopColor="#FFD17B"/>
             <stop offset="1" stopColor="#FBA152"/>
             </linearGradient>
             <linearGradient id="paint3_linear_62_366" x1="16.4926" y1="14" x2="16.4926" y2="43.0148" gradientUnits="userSpaceOnUse">
             <stop stopColor="#F58425" stopOpacity="0.2"/>
             <stop offset="1" stopColor="#F58425" stopOpacity="0.01"/>
             </linearGradient>
             <linearGradient id="paint4_linear_62_366" x1="16.4926" y1="14" x2="16.4926" y2="43.0148" gradientUnits="userSpaceOnUse">
             <stop stopColor="#F58425" stopOpacity="0.2"/>
             <stop offset="1" stopColor="#F58425" stopOpacity="0.01"/>
             </linearGradient>
             <linearGradient id="paint5_linear_62_366" x1="24.1228" y1="22.769" x2="24.1228" y2="35.8502" gradientUnits="userSpaceOnUse">
             <stop stopColor="#FD9B41"/>
             <stop offset="1" stopColor="#F48224"/>
             </linearGradient>
             </defs>
             </svg>
           }
           {
            level === "1" && <svg width="62" height="68" viewBox="0 0 62 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M48 56C49.1046 56 50 56.8954 50 58C50 59.1046 49.1046 60 48 60H30C29.8824 60 29.7673 59.9899 29.6553 59.9704C23.2305 59.687 17.3308 57.3828 12.5761 53.6779C12.1894 53.3766 11.6067 52.8771 11.1748 52.5013C10.8054 52.1799 10.3333 52 9.84362 52H5C3.89543 52 3 51.1046 3 50C3 48.8954 3.89543 48 5 48H7C8.10457 48 9 47.1046 9 46C9 44.8954 8.10457 44 7 44H2C0.89543 44 0 43.1046 0 42C0 40.8954 0.89543 40 2 40H3C4.10457 40 5 39.1046 5 38C5 36.8954 4.10457 36 3 36C2.1913 36 1.49962 35.4171 1.36506 34.6196C1.31617 34.3299 1.27734 34.0966 1.27093 34.0492C1.09227 32.7249 1 31.3732 1 30C1 13.4315 14.4315 0 31 0C36 0 41 0 46 0C47.1046 0 48 0.89543 48 2C48 3.10457 47.1046 4 46 4H43C41.8954 4 41 4.89543 41 6C41 7.10457 41.8954 8 43 8H55C56.1046 8 57 8.89543 57 10C57 11.1038 56.1058 11.9988 55.0022 12L52 12C50.8954 12 50 12.8954 50 14C50 15.1046 50.8954 16 52 16H56.306C57.0624 16 57.7556 16.4259 58.0835 17.1075C58.2807 17.5171 58.488 17.959 58.6237 18.2783C60.1536 21.8793 61 25.8408 61 30C61 31.3068 60.9164 32.5942 60.7544 33.8569C60.7271 34.0692 60.6853 34.3418 60.6398 34.6208C60.5093 35.4213 59.8111 36 59 36C57.8954 36 57 36.8954 57 38C57 39.1046 57.8954 40 59 40H60C61.1046 40 62 40.8954 62 42C62 43.1046 61.1046 44 60 44H58.7162C57.9901 44 57.3224 44.3942 56.9597 45.0232C56.7241 45.4317 56.4621 45.8761 56.2675 46.1794C55.8114 46.8903 55.326 47.5807 54.8132 48.2489C54.2981 48.9201 53.7553 49.5688 53.1864 50.1934C52.8743 50.5362 52.3685 51.044 51.974 51.4341C51.605 51.799 51.1061 52 50.5871 52H45C43.8954 52 43 52.8954 43 54C43 55.0969 43.883 55.9875 44.9769 55.9999L48 56Z" fill="url(#paint0_linear_62_393)"/>
            <g opacity="0.1">
            <path fillRule="evenodd" clipRule="evenodd" d="M27.4733 7.5624C29.5762 6.03454 32.4238 6.03454 34.5267 7.5624L51.2497 19.7124C53.3526 21.2402 54.2326 23.9484 53.4293 26.4206L47.0417 46.0796C46.2385 48.5518 43.9347 50.2255 41.3354 50.2255H20.6646C18.0653 50.2255 15.7615 48.5518 14.9583 46.0796L8.57068 26.4206C7.76743 23.9484 8.64738 21.2402 10.7503 19.7124L27.4733 7.5624Z" fill="#0298F3" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            <g filter="url(#filter0_d_62_393)">
            <path fillRule="evenodd" clipRule="evenodd" d="M23 30H39V62.3364C39 63.0906 38.1969 63.5734 37.5308 63.2195L31 59.75L24.4692 63.2195C23.8031 63.5734 23 63.0906 23 62.3364V30Z" fill="#7F45F6"/>
            </g>
            <mask id="mask0_62_393" mask-type="luminance" maskUnits="userSpaceOnUse" x="23" y="30" width="16" height="34">
            <path fillRule="evenodd" clipRule="evenodd" d="M23 30H39V62.3364C39 63.0906 38.1969 63.5734 37.5308 63.2195L31 59.75L24.4692 63.2195C23.8031 63.5734 23 63.0906 23 62.3364V30Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_62_393)">
            <path fillRule="evenodd" clipRule="evenodd" d="M27 46H35V64H27V46Z" fill="white"/>
            </g>
            <path style={{ mixBlendMode: 'multiply' }} opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M28.649 10.7083C30.051 9.68969 31.9494 9.68969 33.3513 10.7083L50.5233 23.1845C51.9253 24.203 52.5119 26.0085 51.9764 27.6566L45.4173 47.8435C44.8818 49.4916 43.346 50.6075 41.6131 50.6075H20.3873C18.6544 50.6075 17.1186 49.4916 16.5831 47.8435L10.0239 27.6566C9.48843 26.0085 10.0751 24.203 11.477 23.1845L28.649 10.7083Z" fill="#0298F3"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M28.6489 8.7082C30.0508 7.68963 31.9492 7.68963 33.3511 8.7082L50.5232 21.1844C51.9251 22.203 52.5117 24.0085 51.9762 25.6565L45.4171 45.8435C44.8816 47.4916 43.3458 48.6074 41.6129 48.6074H20.3871C18.6542 48.6074 17.1184 47.4916 16.5829 45.8435L10.0238 25.6565C9.48826 24.0084 10.0749 22.203 11.4768 21.1844L28.6489 8.7082Z" fill="url(#paint1_linear_62_393)" stroke="#FEFFFF" stopOpacity="0.2"/>
            <mask id="mask1_62_393" mask-type="luminance" maskUnits="userSpaceOnUse" x="9" y="7" width="44" height="43">
            <path fillRule="evenodd" clipRule="evenodd" d="M28.6489 8.7082C30.0508 7.68963 31.9492 7.68963 33.3511 8.7082L50.5232 21.1844C51.9251 22.203 52.5117 24.0085 51.9762 25.6565L45.4171 45.8435C44.8816 47.4916 43.3458 48.6074 41.6129 48.6074H20.3871C18.6542 48.6074 17.1184 47.4916 16.5829 45.8435L10.0238 25.6565C9.48826 24.0084 10.0749 22.203 11.4768 21.1844L28.6489 8.7082Z" fill="white" stroke="white"/>
            </mask>
            <g mask="url(#mask1_62_393)">
            <path d="M33.0574 9.11278C31.8307 8.22152 30.1696 8.22152 28.9429 9.11278L11.7709 21.589C10.5442 22.4802 10.0309 24.06 10.4994 25.5021L17.0585 45.689C17.5271 47.1311 18.871 48.1075 20.3872 48.1075H41.613C43.1293 48.1075 44.4732 47.1311 44.9417 45.689L51.5009 25.5021C51.9694 24.06 51.4561 22.4802 50.2294 21.589L33.0574 9.11278Z" stroke="#94B4BD" strokeLinecap="round"/>
            <path d="M44.9417 45.6889L51.5008 25.502" stroke="#B1CDD0" strokeLinecap="round"/>
            <path d="M10.4993 25.502L17.0584 45.6889" stroke="#B1CDD0" strokeLinecap="round"/>
            <path d="M51.5009 25.5021C51.9694 24.06 51.4561 22.4802 50.2294 21.589L33.0574 9.11278C31.8307 8.22152 30.1696 8.22152 28.9429 9.11278L11.7709 21.589C10.5442 22.4802 10.0309 24.06 10.4994 25.5021" stroke="#C3E6E7" strokeLinecap="round"/>
            <path opacity="0.4" d="M33.0573 9.11278C31.8306 8.22152 30.1695 8.22152 28.9428 9.11278L11.7708 21.589" stroke="#E5FEFF" strokeLinecap="round"/>
            <path d="M28.9427 9.11279L24.6497 12.2318" stroke="white" strokeLinecap="round"/>
            </g>
            <g filter="url(#filter1_d_62_393)">
            <path fillRule="evenodd" clipRule="evenodd" d="M29.8244 14.8541C30.5254 14.3448 31.4746 14.3448 32.1756 14.8541L45.0413 24.2016C45.7423 24.7109 46.0356 25.6136 45.7679 26.4377L40.8536 41.5623C40.5858 42.3864 39.8179 42.9443 38.9515 42.9443H23.0485C22.1821 42.9443 21.4142 42.3864 21.1464 41.5623L16.2321 26.4377C15.9644 25.6136 16.2577 24.7109 16.9587 24.2016L29.8244 14.8541Z" fill="url(#paint2_linear_62_393)"/>
            <path d="M32.4695 14.4496C31.5932 13.813 30.4068 13.813 29.5305 14.4496L16.6648 23.7971C15.7886 24.4337 15.4219 25.5621 15.7566 26.5922L20.6709 41.7168C21.0056 42.7469 21.9655 43.4443 23.0485 43.4443H38.9515C40.0345 43.4443 40.9944 42.7469 41.3291 41.7168L46.2434 26.5922C46.5781 25.5621 46.2114 24.4337 45.3352 23.7971L32.4695 14.4496Z" stroke="#94A0A4" stopOpacity="0.06"/>
            </g>
            <mask id="mask2_62_393" mask-type="luminance" maskUnits="userSpaceOnUse" x="16" y="14" width="30" height="29">
            <path fillRule="evenodd" clipRule="evenodd" d="M29.8244 14.8541C30.5254 14.3448 31.4746 14.3448 32.1756 14.8541L45.0413 24.2016C45.7423 24.7109 46.0356 25.6136 45.7679 26.4377L40.8536 41.5623C40.5858 42.3864 39.8179 42.9443 38.9515 42.9443H23.0485C22.1821 42.9443 21.4142 42.3864 21.1464 41.5623L16.2321 26.4377C15.9644 25.6136 16.2577 24.7109 16.9587 24.2016L29.8244 14.8541Z" fill="white"/>
            </mask>
            <g mask="url(#mask2_62_393)">
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.2">
            <path fillRule="evenodd" clipRule="evenodd" d="M31 30L15 34V26L31 30ZM31 30L35 14H27L31 30ZM31 30L47 26V34L31 30ZM31 30L39.4853 15.8579L45.1421 21.5147L31 30ZM31 30L39.4853 44.1421L45.1421 38.4853L31 30ZM31 30L27 46H35L31 30ZM31 30L22.5147 44.1421L16.8579 38.4853L31 30Z" fill="url(#paint3_linear_62_393)"/>
            <path d="M22.5147 15.8579L16.8579 21.5147L31 30L22.5147 15.8579Z" fill="url(#paint4_linear_62_393)"/>
            </g>
            <path d="M28.5102 16.4268C27.8159 16.9312 27.2798 17.3207 26.9019 17.5953" stroke="white" strokeLinecap="round"/>
            </g>
            <g filter="url(#filter2_d_62_393)">
            <path d="M28.4498 26.4901L31 22.769L33.5502 26.4901L37.8772 27.7656L35.1263 31.3409L35.2503 35.8502L31 34.3388L26.7497 35.8502L26.8737 31.3409L24.1228 27.7656L28.4498 26.4901Z" fill="white"/>
            <path d="M31.8249 22.2037C31.6384 21.9317 31.3298 21.769 31 21.769C30.6702 21.769 30.3616 21.9317 30.1751 22.2037L27.8259 25.6314L23.84 26.8064C23.5237 26.8997 23.2737 27.1429 23.1717 27.4566C23.0698 27.7703 23.1291 28.114 23.3303 28.3754L25.8643 31.6688L25.75 35.8227C25.741 36.1524 25.895 36.4654 26.1619 36.6592C26.4287 36.8531 26.7739 36.9029 27.0847 36.7924L31 35.4001L34.9153 36.7924C35.226 36.9029 35.5713 36.8531 35.8381 36.6592C36.1049 36.4654 36.259 36.1524 36.2499 35.8227L36.1357 31.6688L38.6697 28.3754C38.8708 28.114 38.9301 27.7703 38.8282 27.4566C38.7263 27.1429 38.4763 26.8997 38.1599 26.8064L34.174 25.6314L31.8249 22.2037Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            </g>
            <g filter="url(#filter3_i_62_393)">
            <path d="M28.4498 26.4901L31 22.769L33.5502 26.4901L37.8772 27.7656L35.1263 31.3409L35.2503 35.8502L31 34.3388L26.7497 35.8502L26.8737 31.3409L24.1228 27.7656L28.4498 26.4901Z" fill="url(#paint5_linear_62_393)"/>
            </g>
            <g filter="url(#filter4_d_62_393)">
            <path fillRule="evenodd" clipRule="evenodd" d="M25.6073 43.52L25.261 43.3834C25.0493 43.2999 24.9453 43.0605 25.0289 42.8488C25.0707 42.7426 25.1548 42.6585 25.261 42.6166L25.6073 42.48C26.0065 42.3226 26.3226 42.0065 26.48 41.6073L26.6166 41.261C26.7001 41.0493 26.9395 40.9453 27.1512 41.0289C27.2574 41.0707 27.3415 41.1548 27.3834 41.261L27.52 41.6073C27.6774 42.0065 27.9935 42.3226 28.3927 42.48L28.739 42.6166C28.9507 42.7001 29.0547 42.9395 28.9711 43.1512C28.9293 43.2574 28.8452 43.3415 28.739 43.3834L28.3927 43.52C27.9935 43.6774 27.6774 43.9935 27.52 44.3927L27.3834 44.739C27.2999 44.9507 27.0605 45.0547 26.8488 44.9711C26.7426 44.9293 26.6585 44.8452 26.6166 44.739L26.48 44.3927C26.3226 43.9935 26.0065 43.6774 25.6073 43.52Z" fill="white"/>
            </g>
            <g filter="url(#filter5_d_62_393)">
            <path fillRule="evenodd" clipRule="evenodd" d="M42.7591 26.1499L42.3263 25.9793C42.0616 25.8749 41.9317 25.5757 42.0361 25.311C42.0884 25.1782 42.1935 25.0731 42.3263 25.0207L42.7591 24.8501C43.2582 24.6532 43.6532 24.2582 43.8501 23.7591L44.0207 23.3263C44.1251 23.0616 44.4243 22.9317 44.689 23.0361C44.8218 23.0884 44.9269 23.1935 44.9793 23.3263L45.1499 23.7591C45.3468 24.2582 45.7418 24.6532 46.2409 24.8501L46.6737 25.0207C46.9384 25.1251 47.0683 25.4243 46.9639 25.689C46.9116 25.8218 46.8065 25.9269 46.6737 25.9793L46.2409 26.1499C45.7418 26.3468 45.3468 26.7418 45.1499 27.2409L44.9793 27.6737C44.8749 27.9384 44.5757 28.0683 44.311 27.9639C44.1782 27.9116 44.0731 27.8065 44.0207 27.6737L43.8501 27.2409C43.6532 26.7418 43.2582 26.3468 42.7591 26.1499Z" fill="white"/>
            </g>
            <g filter="url(#filter6_d_62_393)">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.4555 30.89L18.1958 30.7876C18.037 30.7249 17.959 30.5454 18.0216 30.3866C18.0531 30.3069 18.1161 30.2439 18.1958 30.2124L18.4555 30.11C18.7549 29.9919 18.9919 29.7549 19.11 29.4555L19.2124 29.1958C19.2751 29.037 19.4546 28.959 19.6134 29.0216C19.6931 29.0531 19.7561 29.1161 19.7876 29.1958L19.89 29.4555C20.0081 29.7549 20.2451 29.9919 20.5445 30.11L20.8042 30.2124C20.963 30.2751 21.041 30.4546 20.9784 30.6134C20.9469 30.6931 20.8839 30.7561 20.8042 30.7876L20.5445 30.89C20.2451 31.0081 20.0081 31.2451 19.89 31.5445L19.7876 31.8042C19.7249 31.963 19.5454 32.041 19.3866 31.9784C19.3069 31.9469 19.2439 31.8839 19.2124 31.8042L19.11 31.5445C18.9919 31.2451 18.7549 31.0081 18.4555 30.89Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d_62_393" x="21" y="30" width="20" height="37.3379" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.333333 0 0 0 0 0.790431 0 0 0 0 0.819608 0 0 0 0.2 0"/>
            <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_393"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_393" result="shape"/>
            </filter>
            <filter id="filter1_d_62_393" x="13.134" y="12.4722" width="35.7319" height="34.4722" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.443137 0 0 0 0 0.643137 0 0 0 0.12 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_393"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_393" result="shape"/>
            </filter>
            <filter id="filter2_d_62_393" x="20.1228" y="19.769" width="21.7544" height="21.0811" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.596078 0 0 0 0 0.745098 0 0 0 0 0.780392 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_393"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_393" result="shape"/>
            </filter>
            <filter id="filter3_i_62_393" x="24.1228" y="22.769" width="13.7544" height="14.0811" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.508286 0 0 0 0 0.694443 0 0 0 0 0.72829 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_393"/>
            </filter>
            <filter id="filter4_d_62_393" x="23" y="39" width="8" height="8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.705882 0 0 0 0 0.823529 0 0 0 0 0.831373 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_393"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_393" result="shape"/>
            </filter>
            <filter id="filter5_d_62_393" x="40" y="21" width="9" height="9" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.705882 0 0 0 0 0.823529 0 0 0 0 0.831373 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_393"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_393" result="shape"/>
            </filter>
            <filter id="filter6_d_62_393" x="16" y="27" width="7" height="7" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.705882 0 0 0 0 0.823529 0 0 0 0 0.831373 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_393"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_393" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_62_393" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#59CBF2"/>
            <stop offset="1" stopColor="#40A7E8"/>
            </linearGradient>
            <linearGradient id="paint1_linear_62_393" x1="8" y1="7" x2="8" y2="53" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C4ECEB"/>
            <stop offset="1" stopColor="#A7BCC1"/>
            </linearGradient>
            <linearGradient id="paint2_linear_62_393" x1="15" y1="14" x2="15" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F0FBFE"/>
            <stop offset="1" stopColor="#C0DCDC"/>
            </linearGradient>
            <linearGradient id="paint3_linear_62_393" x1="16.4797" y1="14" x2="16.4797" y2="43.0406" gradientUnits="userSpaceOnUse">
            <stop stopColor="#AFD4D6"/>
            <stop offset="1" stopColor="#B9D9DB" stopOpacity="0.57"/>
            </linearGradient>
            <linearGradient id="paint4_linear_62_393" x1="16.4797" y1="14" x2="16.4797" y2="43.0406" gradientUnits="userSpaceOnUse">
            <stop stopColor="#AFD4D6"/>
            <stop offset="1" stopColor="#B9D9DB" stopOpacity="0.57"/>
            </linearGradient>
            <linearGradient id="paint5_linear_62_393" x1="24.1228" y1="22.769" x2="24.1228" y2="35.8502" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B7D6D8"/>
            <stop offset="1" stopColor="#A7BCC1"/>
            </linearGradient>
            </defs>
            </svg>            
           }
           {
            level === "2" && <svg width="62" height="68" viewBox="0 0 62 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M48 56C49.1046 56 50 56.8954 50 58C50 59.1046 49.1046 60 48 60H30C29.8824 60 29.7673 59.9899 29.6553 59.9704C23.2305 59.687 17.3308 57.3828 12.5761 53.6779C12.1894 53.3766 11.6067 52.8771 11.1748 52.5013C10.8054 52.1799 10.3333 52 9.84362 52H5C3.89543 52 3 51.1046 3 50C3 48.8954 3.89543 48 5 48H7C8.10457 48 9 47.1046 9 46C9 44.8954 8.10457 44 7 44H2C0.89543 44 0 43.1046 0 42C0 40.8954 0.89543 40 2 40H3C4.10457 40 5 39.1046 5 38C5 36.8954 4.10457 36 3 36C2.1913 36 1.49962 35.4171 1.36506 34.6196C1.31617 34.3299 1.27734 34.0966 1.27093 34.0492C1.09227 32.7249 1 31.3732 1 30C1 13.4315 14.4315 0 31 0C36 0 41 0 46 0C47.1046 0 48 0.89543 48 2C48 3.10457 47.1046 4 46 4H43C41.8954 4 41 4.89543 41 6C41 7.10457 41.8954 8 43 8H55C56.1046 8 57 8.89543 57 10C57 11.1038 56.1058 11.9988 55.0022 12L52 12C50.8954 12 50 12.8954 50 14C50 15.1046 50.8954 16 52 16H56.306C57.0624 16 57.7556 16.4259 58.0835 17.1075C58.2807 17.5171 58.488 17.959 58.6237 18.2783C60.1536 21.8793 61 25.8408 61 30C61 31.3068 60.9164 32.5942 60.7544 33.8569C60.7271 34.0692 60.6853 34.3418 60.6398 34.6208C60.5093 35.4213 59.8111 36 59 36C57.8954 36 57 36.8954 57 38C57 39.1046 57.8954 40 59 40H60C61.1046 40 62 40.8954 62 42C62 43.1046 61.1046 44 60 44H58.7162C57.9901 44 57.3224 44.3942 56.9597 45.0232C56.7241 45.4317 56.4621 45.8761 56.2675 46.1794C55.8114 46.8903 55.326 47.5807 54.8132 48.2489C54.2981 48.9201 53.7553 49.5688 53.1864 50.1934C52.8743 50.5362 52.3685 51.044 51.974 51.4341C51.605 51.799 51.1061 52 50.5871 52H45C43.8954 52 43 52.8954 43 54C43 55.0969 43.883 55.9875 44.9769 55.9999L48 56Z" fill="url(#paint0_linear_62_424)"/>
            <g opacity="0.1">
            <path fillRule="evenodd" clipRule="evenodd" d="M27.9986 6.67689C29.855 5.6051 32.1422 5.6051 33.9986 6.67689L49.6971 15.7404C51.5535 16.8122 52.6971 18.793 52.6971 20.9366V39.0637C52.6971 41.2073 51.5535 43.188 49.6971 44.2598L33.9986 53.3234C32.1422 54.3952 29.855 54.3952 27.9986 53.3234L12.3 44.2598C10.4436 43.188 9.30005 41.2073 9.30005 39.0637L9.30005 20.9366C9.30005 18.793 10.4436 16.8122 12.3 15.7404L27.9986 6.67689Z" fill="#0274F3" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            <g filter="url(#filter0_d_62_424)">
            <path fillRule="evenodd" clipRule="evenodd" d="M24.0718 27L37.9282 35L21.76 63.0041C21.3829 63.6573 20.446 63.6738 20.0461 63.0344L16.125 56.7643L8.73435 56.5035C7.98061 56.4769 7.52648 55.6573 7.90358 55.0041L24.0718 27Z" fill="#2DCD6B"/>
            </g>
            <mask id="mask0_62_424" mask-type="luminance" maskUnits="userSpaceOnUse" x="7" y="27" width="31" height="37">
            <path fillRule="evenodd" clipRule="evenodd" d="M24.0718 27L37.9282 35L21.76 63.0041C21.3829 63.6573 20.446 63.6738 20.0461 63.0344L16.125 56.7643L8.73435 56.5035C7.98061 56.4769 7.52648 55.6573 7.90358 55.0041L24.0718 27Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_62_424)">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.5359 42.8564L26.4641 46.8564L17.4641 62.4449L10.5359 58.4449L19.5359 42.8564Z" fill="white"/>
            </g>
            <g filter="url(#filter1_d_62_424)">
            <path fillRule="evenodd" clipRule="evenodd" d="M37.9282 27L24.0718 35L40.24 63.0041C40.6171 63.6573 41.554 63.6738 41.9539 63.0344L45.875 56.7643L53.2657 56.5035C54.0194 56.4769 54.4735 55.6573 54.0964 55.0041L37.9282 27Z" fill="#2DCD6B"/>
            </g>
            <mask id="mask1_62_424" mask-type="luminance" maskUnits="userSpaceOnUse" x="24" y="27" width="31" height="37">
            <path fillRule="evenodd" clipRule="evenodd" d="M37.9282 27L24.0718 35L40.24 63.0041C40.6171 63.6573 41.554 63.6738 41.9539 63.0344L45.875 56.7643L53.2657 56.5035C54.0194 56.4769 54.4735 55.6573 54.0964 55.0041L37.9282 27Z" fill="white"/>
            </mask>
            <g mask="url(#mask1_62_424)">
            <path fillRule="evenodd" clipRule="evenodd" d="M42.4641 42.8564L35.5359 46.8564L44.5359 62.4449L51.4641 58.4449L42.4641 42.8564Z" fill="white"/>
            </g>
            <path style={{ mixBlendMode: 'multiply' }} opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M29.0001 10.1546C30.2377 9.44002 31.7625 9.44002 33.0001 10.1546L48.9187 19.3451C50.1563 20.0597 50.9187 21.3802 50.9187 22.8093V41.1905C50.9187 42.6195 50.1563 43.94 48.9187 44.6546L33.0001 53.8451C31.7625 54.5597 30.2377 54.5597 29.0001 53.8451L13.0815 44.6546C11.8439 43.94 11.0815 42.6195 11.0815 41.1905L11.0815 22.8093C11.0815 21.3802 11.8439 20.0597 13.0815 19.3451L29.0001 10.1546Z" fill="#0274F3"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M29 8.1547C30.2376 7.44017 31.7624 7.44017 33 8.1547L48.9186 17.3453C50.1562 18.0598 50.9186 19.3803 50.9186 20.8094V39.1906C50.9186 40.6197 50.1562 41.9402 48.9186 42.6547L33 51.8453C31.7624 52.5598 30.2376 52.5598 29 51.8453L13.0814 42.6547C11.8438 41.9402 11.0814 40.6197 11.0814 39.1906V20.8094C11.0814 19.3803 11.8438 18.0598 13.0814 17.3453L29 8.1547Z" fill="url(#paint1_linear_62_424)" stroke="#FFF04D" stopOpacity="0.4"/>
            <mask id="mask2_62_424" mask-type="luminance" maskUnits="userSpaceOnUse" x="10" y="7" width="42" height="46">
            <path fillRule="evenodd" clipRule="evenodd" d="M29 8.1547C30.2376 7.44017 31.7624 7.44017 33 8.1547L48.9186 17.3453C50.1562 18.0598 50.9186 19.3803 50.9186 20.8094V39.1906C50.9186 40.6197 50.1562 41.9402 48.9186 42.6547L33 51.8453C31.7624 52.5598 30.2376 52.5598 29 51.8453L13.0814 42.6547C11.8438 41.9402 11.0814 40.6197 11.0814 39.1906V20.8094C11.0814 19.3803 11.8438 18.0598 13.0814 17.3453L29 8.1547Z" fill="white" stroke="white"/>
            </mask>
            <g mask="url(#mask2_62_424)">
            <path d="M32.7501 8.58756C31.6672 7.96235 30.333 7.96235 29.2501 8.58756L13.3315 17.7782C12.2486 18.4034 11.5815 19.5588 11.5815 20.8093L11.5815 39.1904C11.5815 40.4409 12.2486 41.5963 13.3315 42.2215L29.2501 51.4121C30.333 52.0374 31.6672 52.0374 32.7501 51.4121L48.6687 42.2215C49.7516 41.5963 50.4187 40.4409 50.4187 39.1904V20.8093C50.4187 19.5588 49.7516 18.4034 48.6687 17.7782L32.7501 8.58756Z" stroke="#F9B607" strokeLinecap="round"/>
            <path d="M50.4187 39.1905V20.8093C50.4187 19.5588 49.7516 18.4034 48.6687 17.7782L32.7501 8.58756C31.6672 7.96235 30.333 7.96235 29.2501 8.58756L13.3315 17.7782C12.2486 18.4034 11.5815 19.5588 11.5815 20.8093L11.5815 39.1905" stroke="#FBC618" strokeLinecap="round"/>
            <path opacity="0.6" d="M50.4187 20.8093C50.4187 19.5588 49.7516 18.4034 48.6687 17.7782L32.7501 8.58756C31.6672 7.96235 30.333 7.96235 29.2501 8.58756L13.3315 17.7782C12.2486 18.4034 11.5815 19.5588 11.5815 20.8093" stroke="#FFF24E" strokeLinecap="round"/>
            <path opacity="0.4" d="M32.7501 8.58756C31.6672 7.96235 30.333 7.96235 29.2501 8.58756C29.2501 8.58756 23.9439 11.6511 21.2908 13.1829" stroke="white" strokeLinecap="round"/>
            <path d="M29.2499 8.58789C29.2499 8.58789 26.4417 10.2092 25.2703 10.8855" stroke="white" strokeLinecap="round"/>
            <path opacity="0.4" d="M32.75 51.4124C34.6222 50.3315 35.9487 49.5656 36.7296 49.1147" stroke="white" strokeLinecap="round"/>
            </g>
            <g filter="url(#filter2_d_62_424)">
            <path fillRule="evenodd" clipRule="evenodd" d="M30 14.5774C30.6188 14.2201 31.3812 14.2201 32 14.5774L43.8564 21.4226C44.4752 21.7799 44.8564 22.4402 44.8564 23.1547V36.8453C44.8564 37.5598 44.4752 38.2201 43.8564 38.5774L32 45.4226C31.3812 45.7799 30.6188 45.7799 30 45.4226L18.1436 38.5774C17.5248 38.2201 17.1436 37.5598 17.1436 36.8453V23.1547C17.1436 22.4402 17.5248 21.7799 18.1436 21.4226L30 14.5774Z" fill="url(#paint2_linear_62_424)"/>
            <path d="M32.25 14.1443C31.4765 13.6978 30.5235 13.6978 29.75 14.1443L17.8936 20.9896C17.1201 21.4362 16.6436 22.2615 16.6436 23.1547V36.8453C16.6436 37.7385 17.1201 38.5638 17.8936 39.0104L29.75 45.8557C30.5235 46.3022 31.4765 46.3022 32.25 45.8557L44.1064 39.0104C44.8799 38.5638 45.3564 37.7385 45.3564 36.8453V23.1547C45.3564 22.2615 44.8799 21.4362 44.1064 20.9896L32.25 14.1443Z" stroke="#F5900D" stopOpacity="0.1" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            <mask id="mask3_62_424" mask-type="luminance" maskUnits="userSpaceOnUse" x="17" y="14" width="28" height="32">
            <path fillRule="evenodd" clipRule="evenodd" d="M30 14.5774C30.6188 14.2201 31.3812 14.2201 32 14.5774L43.8564 21.4226C44.4752 21.7799 44.8564 22.4402 44.8564 23.1547V36.8453C44.8564 37.5598 44.4752 38.2201 43.8564 38.5774L32 45.4226C31.3812 45.7799 30.6188 45.7799 30 45.4226L18.1436 38.5774C17.5248 38.2201 17.1436 37.5598 17.1436 36.8453V23.1547C17.1436 22.4402 17.5248 21.7799 18.1436 21.4226L30 14.5774Z" fill="white"/>
            </mask>
            <g mask="url(#mask3_62_424)">
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.3">
            <path fillRule="evenodd" clipRule="evenodd" d="M31 29.9999L35 14H27L31 30L22.5147 15.8579L16.8579 21.5147L31 30L15 26V34L31 30L16.8579 38.4853L22.5147 44.1422L31 30L27 46H35L31 30L39.4853 44.1421L45.1421 38.4853L31 30L47 34V26L31 29.9999ZM31 29.9999L45.1421 21.5147L39.4853 15.8578L31 29.9999Z" fill="#FFD640"/>
            </g>
            <path opacity="0.4" d="M43.6064 21.8558L31.75 15.0105C31.2859 14.7426 30.7141 14.7426 30.25 15.0105C28.8555 15.8156 27.8675 16.386 27.2859 16.7219C26.0754 17.4207 25.0873 17.9912 24.3218 18.4332C23.0044 19.1938 21.0283 20.3347 18.3936 21.8558" stroke="white" strokeLinecap="round"/>
            <path d="M30.25 15.0107C28.8556 15.8158 27.8675 16.3863 27.2859 16.7221" stroke="white" strokeLinecap="round"/>
            </g>
            <g filter="url(#filter3_d_62_424)">
            <path d="M28.4498 26.4901L31 22.769L33.5502 26.4901L37.8772 27.7656L35.1263 31.3409L35.2503 35.8502L31 34.3388L26.7497 35.8502L26.8737 31.3409L24.1228 27.7656L28.4498 26.4901Z" fill="white"/>
            <path d="M31.8249 22.2037C31.6384 21.9317 31.3298 21.769 31 21.769C30.6702 21.769 30.3616 21.9317 30.1751 22.2037L27.8259 25.6314L23.84 26.8064C23.5237 26.8997 23.2737 27.1429 23.1717 27.4566C23.0698 27.7703 23.1291 28.114 23.3303 28.3754L25.8643 31.6688L25.75 35.8227C25.741 36.1524 25.895 36.4654 26.1619 36.6592C26.4287 36.8531 26.7739 36.9029 27.0847 36.7924L31 35.4001L34.9153 36.7924C35.226 36.9029 35.5713 36.8531 35.8381 36.6592C36.1049 36.4654 36.259 36.1524 36.2499 35.8227L36.1357 31.6688L38.6697 28.3754C38.8708 28.114 38.9301 27.7703 38.8282 27.4566C38.7263 27.1429 38.4763 26.8997 38.1599 26.8064L34.174 25.6314L31.8249 22.2037Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            </g>
            <g filter="url(#filter4_i_62_424)">
            <path d="M28.4498 26.4901L31 22.769L33.5502 26.4901L37.8772 27.7656L35.1263 31.3409L35.2503 35.8502L31 34.3388L26.7497 35.8502L26.8737 31.3409L24.1228 27.7656L28.4498 26.4901Z" fill="url(#paint3_linear_62_424)"/>
            </g>
            <g filter="url(#filter5_d_62_424)">
            <path fillRule="evenodd" clipRule="evenodd" d="M40.9109 22.7799L40.3916 22.5751C40.0739 22.4498 39.918 22.0908 40.0433 21.7732C40.1061 21.6138 40.2322 21.4877 40.3916 21.4249L40.9109 21.2201C41.5098 20.9839 41.9839 20.5098 42.2201 19.9109L42.4249 19.3916C42.5502 19.0739 42.9092 18.918 43.2268 19.0433C43.3862 19.1061 43.5123 19.2322 43.5751 19.3916L43.7799 19.9109C44.0161 20.5098 44.4902 20.9839 45.0891 21.2201L45.6084 21.4249C45.9261 21.5502 46.082 21.9092 45.9567 22.2268C45.8939 22.3862 45.7678 22.5123 45.6084 22.5751L45.0891 22.7799C44.4902 23.0161 44.0161 23.4902 43.7799 24.0891L43.5751 24.6084C43.4498 24.9261 43.0908 25.082 42.7732 24.9567C42.6138 24.8939 42.4877 24.7678 42.4249 24.6084L42.2201 24.0891C41.9839 23.4902 41.5098 23.0161 40.9109 22.7799Z" fill="white"/>
            </g>
            <g filter="url(#filter6_d_62_424)">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.6073 38.52L20.261 38.3834C20.0493 38.2999 19.9453 38.0605 20.0289 37.8488C20.0707 37.7426 20.1548 37.6585 20.261 37.6166L20.6073 37.48C21.0065 37.3226 21.3226 37.0065 21.48 36.6073L21.6166 36.261C21.7001 36.0493 21.9395 35.9453 22.1512 36.0289C22.2574 36.0707 22.3415 36.1548 22.3834 36.261L22.52 36.6073C22.6774 37.0065 22.9935 37.3226 23.3927 37.48L23.739 37.6166C23.9507 37.7001 24.0547 37.9395 23.9711 38.1512C23.9293 38.2574 23.8452 38.3415 23.739 38.3834L23.3927 38.52C22.9935 38.6774 22.6774 38.9935 22.52 39.3927L22.3834 39.739C22.2999 39.9507 22.0605 40.0547 21.8488 39.9711C21.7426 39.9293 21.6585 39.8452 21.6166 39.739L21.48 39.3927C21.3226 38.9935 21.0065 38.6774 20.6073 38.52Z" fill="white"/>
            </g>
            <g filter="url(#filter7_d_62_424)">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.3036 23.26L19.1305 23.1917C19.0246 23.1499 18.9727 23.0303 19.0144 22.9244C19.0354 22.8713 19.0774 22.8292 19.1305 22.8083L19.3036 22.74C19.5033 22.6613 19.6613 22.5033 19.74 22.3036L19.8083 22.1305C19.8501 22.0246 19.9697 21.9727 20.0756 22.0144C20.1287 22.0354 20.1708 22.0774 20.1917 22.1305L20.26 22.3036C20.3387 22.5033 20.4967 22.6613 20.6964 22.74L20.8695 22.8083C20.9754 22.8501 21.0273 22.9697 20.9856 23.0756C20.9646 23.1287 20.9226 23.1708 20.8695 23.1917L20.6964 23.26C20.4967 23.3387 20.3387 23.4967 20.26 23.6964L20.1917 23.8695C20.1499 23.9754 20.0303 24.0273 19.9244 23.9856C19.8713 23.9646 19.8292 23.9226 19.8083 23.8695L19.74 23.6964C19.6613 23.4967 19.5033 23.3387 19.3036 23.26Z" fill="white"/>
            </g>
            <g filter="url(#filter8_d_62_424)">
            <path fillRule="evenodd" clipRule="evenodd" d="M40.4555 39.89L40.1958 39.7876C40.037 39.7249 39.959 39.5454 40.0216 39.3866C40.0531 39.3069 40.1161 39.2439 40.1958 39.2124L40.4555 39.11C40.7549 38.9919 40.9919 38.7549 41.11 38.4555L41.2124 38.1958C41.2751 38.037 41.4546 37.959 41.6134 38.0216C41.6931 38.0531 41.7561 38.1161 41.7876 38.1958L41.89 38.4555C42.0081 38.7549 42.2451 38.9919 42.5445 39.11L42.8042 39.2124C42.963 39.2751 43.041 39.4546 42.9784 39.6134C42.9469 39.6931 42.8839 39.7561 42.8042 39.7876L42.5445 39.89C42.2451 40.0081 42.0081 40.2451 41.89 40.5445L41.7876 40.8042C41.7249 40.963 41.5454 41.041 41.3866 40.9784C41.3069 40.9469 41.2439 40.8839 41.2124 40.8042L41.11 40.5445C40.9919 40.2451 40.7549 40.0081 40.4555 39.89Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d_62_424" x="5.76831" y="27" width="34.1599" height="40.5039" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.333333 0 0 0 0 0.615373 0 0 0 0 0.819608 0 0 0 0.2 0"/>
            <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_424"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_424" result="shape"/>
            </filter>
            <filter id="filter1_d_62_424" x="22.0718" y="27" width="34.1599" height="40.5039" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.333333 0 0 0 0 0.615373 0 0 0 0 0.819608 0 0 0 0.2 0"/>
            <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_424"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_424" result="shape"/>
            </filter>
            <filter id="filter2_d_62_424" x="14.1436" y="12.3096" width="33.7129" height="37.3809" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.927721 0 0 0 0 0.665867 0 0 0 0 0.0535899 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_424"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_424" result="shape"/>
            </filter>
            <filter id="filter3_d_62_424" x="20.1228" y="19.769" width="21.7544" height="21.0811" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.733333 0 0 0 0 0.105882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_424"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_424" result="shape"/>
            </filter>
            <filter id="filter4_i_62_424" x="24.1228" y="22.769" width="13.7544" height="14.0811" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.634454 0 0 0 0 0 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_424"/>
            </filter>
            <filter id="filter5_d_62_424" x="38" y="17" width="10" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_424"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_424" result="shape"/>
            </filter>
            <filter id="filter6_d_62_424" x="18" y="34" width="8" height="8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_424"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_424" result="shape"/>
            </filter>
            <filter id="filter7_d_62_424" x="17" y="20" width="6" height="6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_424"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_424" result="shape"/>
            </filter>
            <filter id="filter8_d_62_424" x="38" y="36" width="7" height="7" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_424"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_424" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_62_424" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#90B3FF"/>
            <stop offset="1" stopColor="#0066FF"/>
            </linearGradient>
            <linearGradient id="paint1_linear_62_424" x1="8" y1="7" x2="8" y2="53" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE046"/>
            <stop offset="1" stopColor="#F9B800"/>
            </linearGradient>
            <linearGradient id="paint2_linear_62_424" x1="15" y1="14" x2="15" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF550"/>
            <stop offset="1" stopColor="#FFD541"/>
            </linearGradient>
            <linearGradient id="paint3_linear_62_424" x1="23.7688" y1="22.769" x2="23.7688" y2="37.2312" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFC823"/>
            <stop offset="1" stopColor="#FCA50E"/>
            </linearGradient>
            </defs>
            </svg>            
           }
           {
            level === "3" && <svg width="62" height="68" viewBox="0 0 62 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M48 56C49.1046 56 50 56.8954 50 58C50 59.1046 49.1046 60 48 60H30C29.8824 60 29.7673 59.9899 29.6553 59.9704C23.2305 59.687 17.3308 57.3828 12.5761 53.6779C12.1894 53.3766 11.6067 52.8771 11.1748 52.5013C10.8054 52.1799 10.3333 52 9.84362 52H5C3.89543 52 3 51.1046 3 50C3 48.8954 3.89543 48 5 48H7C8.10457 48 9 47.1046 9 46C9 44.8954 8.10457 44 7 44H2C0.89543 44 0 43.1046 0 42C0 40.8954 0.89543 40 2 40H3C4.10457 40 5 39.1046 5 38C5 36.8954 4.10457 36 3 36C2.1913 36 1.49962 35.4171 1.36506 34.6196C1.31617 34.3299 1.27734 34.0966 1.27093 34.0492C1.09227 32.7249 1 31.3732 1 30C1 13.4315 14.4315 0 31 0C36 0 41 0 46 0C47.1046 0 48 0.89543 48 2C48 3.10457 47.1046 4 46 4H43C41.8954 4 41 4.89543 41 6C41 7.10457 41.8954 8 43 8H55C56.1046 8 57 8.89543 57 10C57 11.1038 56.1058 11.9988 55.0022 12L52 12C50.8954 12 50 12.8954 50 14C50 15.1046 50.8954 16 52 16H56.306C57.0624 16 57.7556 16.4259 58.0835 17.1075C58.2807 17.5171 58.488 17.959 58.6237 18.2783C60.1536 21.8793 61 25.8408 61 30C61 31.3068 60.9164 32.5942 60.7544 33.8569C60.7271 34.0692 60.6853 34.3418 60.6398 34.6208C60.5093 35.4213 59.8111 36 59 36C57.8954 36 57 36.8954 57 38C57 39.1046 57.8954 40 59 40H60C61.1046 40 62 40.8954 62 42C62 43.1046 61.1046 44 60 44H58.7162C57.9901 44 57.3224 44.3942 56.9597 45.0232C56.7241 45.4317 56.4621 45.8761 56.2675 46.1794C55.8114 46.8903 55.326 47.5807 54.8132 48.2489C54.2981 48.9201 53.7553 49.5688 53.1864 50.1934C52.8743 50.5362 52.3685 51.044 51.974 51.4341C51.605 51.799 51.1061 52 50.5871 52H45C43.8954 52 43 52.8954 43 54C43 55.0969 43.883 55.9875 44.9769 55.9999L48 56Z" fill="url(#paint0_linear_62_470)"/>
            <g opacity="0.1">
            <path fillRule="evenodd" clipRule="evenodd" d="M27.9986 6.67689C29.855 5.6051 32.1422 5.6051 33.9986 6.67689L49.6971 15.7404C51.5535 16.8122 52.6971 18.793 52.6971 20.9366V39.0637C52.6971 41.2073 51.5535 43.188 49.6971 44.2598L33.9986 53.3234C32.1422 54.3952 29.855 54.3952 27.9986 53.3234L12.3 44.2598C10.4436 43.188 9.30005 41.2073 9.30005 39.0637L9.30005 20.9366C9.30005 18.793 10.4436 16.8122 12.3 15.7404L27.9986 6.67689Z" fill="#0602F3" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            <g filter="url(#filter0_d_62_470)">
            <path fillRule="evenodd" clipRule="evenodd" d="M24.0718 27L37.9282 35L21.76 63.0041C21.3829 63.6573 20.446 63.6738 20.0461 63.0344L16.125 56.7643L8.73435 56.5035C7.98061 56.4769 7.52648 55.6573 7.90358 55.0041L24.0718 27Z" fill="#F55462"/>
            </g>
            <mask id="mask0_62_470" mask-type="luminance" maskUnits="userSpaceOnUse" x="7" y="27" width="31" height="37">
            <path fillRule="evenodd" clipRule="evenodd" d="M24.0718 27L37.9282 35L21.76 63.0041C21.3829 63.6573 20.446 63.6738 20.0461 63.0344L16.125 56.7643L8.73435 56.5035C7.98061 56.4769 7.52648 55.6573 7.90358 55.0041L24.0718 27Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_62_470)">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.5359 42.8564L26.4641 46.8564L17.4641 62.4449L10.5359 58.4449L19.5359 42.8564Z" fill="white"/>
            </g>
            <g filter="url(#filter1_d_62_470)">
            <path fillRule="evenodd" clipRule="evenodd" d="M37.9282 27L24.0718 35L40.24 63.0041C40.6171 63.6573 41.554 63.6738 41.9539 63.0344L45.875 56.7643L53.2657 56.5035C54.0194 56.4769 54.4735 55.6573 54.0964 55.0041L37.9282 27Z" fill="#F55462"/>
            </g>
            <mask id="mask1_62_470" mask-type="luminance" maskUnits="userSpaceOnUse" x="24" y="27" width="31" height="37">
            <path fillRule="evenodd" clipRule="evenodd" d="M37.9282 27L24.0718 35L40.24 63.0041C40.6171 63.6573 41.554 63.6738 41.9539 63.0344L45.875 56.7643L53.2657 56.5035C54.0194 56.4769 54.4735 55.6573 54.0964 55.0041L37.9282 27Z" fill="white"/>
            </mask>
            <g mask="url(#mask1_62_470)">
            <path fillRule="evenodd" clipRule="evenodd" d="M42.4641 42.8564L35.5359 46.8564L44.5359 62.4449L51.4641 58.4449L42.4641 42.8564Z" fill="white"/>
            </g>
            <path style={{ mixBlendMode: 'multiply' }} opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M28.9999 10.1546C30.2375 9.44002 31.7623 9.44002 32.9999 10.1546L48.9185 19.3451C50.1561 20.0597 50.9185 21.3802 50.9185 22.8093V41.1905C50.9185 42.6195 50.1561 43.94 48.9185 44.6546L32.9999 53.8451C31.7623 54.5597 30.2375 54.5597 28.9999 53.8451L13.0813 44.6546C11.8437 43.94 11.0813 42.6195 11.0813 41.1905L11.0813 22.8093C11.0813 21.3802 11.8437 20.0597 13.0813 19.3451L28.9999 10.1546Z" fill="#0602F3"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M49 16.677C49 16.2681 49.249 15.9004 49.6286 15.7486L53.1772 14.3291C53.5713 14.1715 54 14.4617 54 14.8862V30.323C54 30.7319 53.751 31.0996 53.3714 31.2514L49 33V16.677Z" fill="url(#paint1_linear_62_470)" stroke="url(#paint2_linear_62_470)" strokeLinecap="round" strokeLinejoin="round"/>
            <mask id="mask2_62_470" mask-type="luminance" maskUnits="userSpaceOnUse" x="48" y="14" width="7" height="19">
            <path fillRule="evenodd" clipRule="evenodd" d="M49 17.3541C49 16.5363 49.4979 15.8008 50.2572 15.4971L51.2572 15.0971C52.5709 14.5716 54 15.5391 54 16.9541V29.6459C54 30.4637 53.5021 31.1992 52.7428 31.5029L51.7428 31.9029C50.4291 32.4284 49 31.4609 49 30.0459V17.3541Z" fill="white" stroke="white"/>
            </mask>
            <g mask="url(#mask2_62_470)">
            <g opacity="0.04">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.9985 6.67689C32.1421 5.6051 29.8549 5.6051 27.9985 6.67689L12.3 15.7404C10.4436 16.8122 9.29998 18.793 9.29998 20.9366V39.0637C9.29998 41.2073 10.4436 43.188 12.3 44.2598L27.9985 53.3234C29.8549 54.3952 32.1421 54.3952 33.9985 53.3234L49.697 44.2598C51.5534 43.188 52.697 41.2073 52.697 39.0637L52.697 20.9366C52.697 18.793 51.5534 16.8122 49.697 15.7404L33.9985 6.67689Z" fill="#0602F3" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M13 16.677C13 16.2681 12.751 15.9004 12.3714 15.7486L8.82283 14.3291C8.42872 14.1715 8 14.4617 8 14.8862V30.323C8 30.7319 8.24895 31.0996 8.62861 31.2514L13 33V16.677Z" fill="url(#paint3_linear_62_470)" stroke="url(#paint4_linear_62_470)" strokeLinecap="round" strokeLinejoin="round"/>
            <mask id="mask3_62_470" mask-type="luminance" maskUnits="userSpaceOnUse" x="7" y="14" width="7" height="19">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 17.3541C13 16.5363 12.5021 15.8008 11.7428 15.4971L10.7428 15.0971C9.42905 14.5716 8 15.5391 8 16.9541V29.6459C8 30.4637 8.4979 31.1992 9.25722 31.5029L10.2572 31.9029C11.5709 32.4284 13 31.4609 13 30.0459V17.3541Z" fill="white" stroke="white"/>
            </mask>
            <g mask="url(#mask3_62_470)">
            <g opacity="0.04">
            <path fillRule="evenodd" clipRule="evenodd" d="M27.9986 6.67689C29.855 5.6051 32.1422 5.6051 33.9986 6.67689L49.6971 15.7404C51.5535 16.8122 52.6971 18.793 52.6971 20.9366V39.0637C52.6971 41.2073 51.5535 43.188 49.6971 44.2598L33.9986 53.3234C32.1422 54.3952 29.855 54.3952 27.9986 53.3234L12.3 44.2598C10.4436 43.188 9.30005 41.2073 9.30005 39.0637L9.30005 20.9366C9.30005 18.793 10.4436 16.8122 12.3 15.7404L27.9986 6.67689Z" fill="#0602F3" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M44 11.3538C44 10.681 43.349 10.2001 42.7059 10.398L31 13.9998L19.2941 10.398C18.651 10.2001 18 10.681 18 11.3538V25.9998C18 26.5521 18.4477 26.9998 19 26.9998H43C43.5523 26.9998 44 26.5521 44 25.9998V11.3538Z" fill="url(#paint5_linear_62_470)" stroke="url(#paint6_linear_62_470)" strokeLinecap="round" strokeLinejoin="round"/>
            <mask id="mask4_62_470" mask-type="luminance" maskUnits="userSpaceOnUse" x="17" y="9" width="28" height="10">
            <path fillRule="evenodd" clipRule="evenodd" d="M44 11.354C44 10.6812 43.349 10.2003 42.7059 10.3982L31 14L19.2941 10.3982C18.651 10.2003 18 10.6812 18 11.354V17C18 17.5523 18.4477 18 19 18H43C43.5523 18 44 17.5523 44 17V11.354Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            </mask>
            <g mask="url(#mask4_62_470)">
            <g opacity="0.04">
            <path fillRule="evenodd" clipRule="evenodd" d="M27.9986 6.67689C29.855 5.6051 32.1422 5.6051 33.9986 6.67689L49.6971 15.7404C51.5535 16.8122 52.6971 18.793 52.6971 20.9366V39.0637C52.6971 41.2073 51.5535 43.188 49.6971 44.2598L33.9986 53.3234C32.1422 54.3952 29.855 54.3952 27.9986 53.3234L12.3 44.2598C10.4436 43.188 9.30005 41.2073 9.30005 39.0637L9.30005 20.9366C9.30005 18.793 10.4436 16.8122 12.3 15.7404L27.9986 6.67689Z" fill="#0602F3" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M29 8.1547C30.2376 7.44017 31.7624 7.44017 33 8.1547L48.9186 17.3453C50.1562 18.0598 50.9186 19.3803 50.9186 20.8094V39.1906C50.9186 40.6197 50.1562 41.9402 48.9186 42.6547L33 51.8453C31.7624 52.5598 30.2376 52.5598 29 51.8453L13.0814 42.6547C11.8438 41.9402 11.0814 40.6197 11.0814 39.1906V20.8094C11.0814 19.3803 11.8438 18.0598 13.0814 17.3453L29 8.1547Z" fill="url(#paint7_linear_62_470)" stroke="#FFF04D" stopOpacity="0.4"/>
            <path d="M32.7499 8.58756C31.667 7.96235 30.3328 7.96235 29.2499 8.58756L13.3313 17.7782C12.2484 18.4034 11.5813 19.5588 11.5813 20.8093L11.5813 39.1904C11.5813 40.4409 12.2484 41.5963 13.3313 42.2215L29.2499 51.4121C30.3328 52.0374 31.667 52.0374 32.7499 51.4121L48.6685 42.2215C49.7514 41.5963 50.4185 40.4409 50.4185 39.1904V20.8093C50.4185 19.5588 49.7514 18.4034 48.6685 17.7782L32.7499 8.58756Z" stroke="#F9B307"/>
            <path opacity="0.4" d="M32.75 51.4124C34.6222 50.3315 35.9487 49.5656 36.7296 49.1147" stroke="white" strokeLinecap="round"/>
            <path d="M50.4185 39.1905V20.8093C50.4185 19.5588 49.7514 18.4034 48.6685 17.7782L32.7499 8.58756C31.667 7.96235 30.3328 7.96235 29.2499 8.58756L13.3313 17.7782C12.2484 18.4034 11.5813 19.5588 11.5813 20.8093L11.5813 39.1905" stroke="#FAC00E" strokeLinecap="round"/>
            <path opacity="0.6" d="M50.4185 20.8093C50.4185 19.5588 49.7514 18.4034 48.6685 17.7782L32.7499 8.58756C31.667 7.96235 30.3328 7.96235 29.2499 8.58756L13.3313 17.7782C12.2484 18.4034 11.5813 19.5588 11.5813 20.8093" stroke="#FDDB3D" strokeLinecap="round"/>
            <path opacity="0.6" d="M32.7501 8.58756C31.6672 7.96235 30.333 7.96235 29.2501 8.58756C29.2501 8.58756 23.9439 11.6511 21.2908 13.1829" stroke="white" strokeLinecap="round"/>
            <path d="M29.2499 8.58789C29.2499 8.58789 26.4417 10.2092 25.2703 10.8855" stroke="white" strokeLinecap="round"/>
            <g filter="url(#filter2_d_62_470)">
            <path fillRule="evenodd" clipRule="evenodd" d="M30 14.5774C30.6188 14.2201 31.3812 14.2201 32 14.5774L43.8564 21.4226C44.4752 21.7799 44.8564 22.4402 44.8564 23.1547V36.8453C44.8564 37.5598 44.4752 38.2201 43.8564 38.5774L32 45.4226C31.3812 45.7799 30.6188 45.7799 30 45.4226L18.1436 38.5774C17.5248 38.2201 17.1436 37.5598 17.1436 36.8453V23.1547C17.1436 22.4402 17.5248 21.7799 18.1436 21.4226L30 14.5774Z" fill="url(#paint8_linear_62_470)"/>
            <path d="M32.25 14.1443C31.4765 13.6978 30.5235 13.6978 29.75 14.1443L17.8936 20.9896C17.1201 21.4362 16.6436 22.2615 16.6436 23.1547V36.8453C16.6436 37.7385 17.1201 38.5638 17.8936 39.0104L29.75 45.8557C30.5235 46.3022 31.4765 46.3022 32.25 45.8557L44.1064 39.0104C44.8799 38.5638 45.3564 37.7385 45.3564 36.8453V23.1547C45.3564 22.2615 44.8799 21.4362 44.1064 20.9896L32.25 14.1443Z" stroke="#F5900D" stopOpacity="0.1" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            <mask id="mask5_62_470" mask-type="luminance" maskUnits="userSpaceOnUse" x="17" y="14" width="28" height="32">
            <path fillRule="evenodd" clipRule="evenodd" d="M30 14.5774C30.6188 14.2201 31.3812 14.2201 32 14.5774L43.8564 21.4226C44.4752 21.7799 44.8564 22.4402 44.8564 23.1547V36.8453C44.8564 37.5598 44.4752 38.2201 43.8564 38.5774L32 45.4226C31.3812 45.7799 30.6188 45.7799 30 45.4226L18.1436 38.5774C17.5248 38.2201 17.1436 37.5598 17.1436 36.8453V23.1547C17.1436 22.4402 17.5248 21.7799 18.1436 21.4226L30 14.5774Z" fill="white"/>
            </mask>
            <g mask="url(#mask5_62_470)">
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.3">
            <path fillRule="evenodd" clipRule="evenodd" d="M31 30L15 34V26L31 30ZM31 30L35 14H27L31 30ZM31 30L47 26V34L31 30ZM31 30L39.4853 15.8579L45.1421 21.5147L31 30ZM31 30L39.4853 44.1421L45.1421 38.4853L31 30ZM31 30L27 46H35L31 30ZM31 30L22.5147 44.1421L16.8579 38.4853L31 30Z" fill="#FFD640"/>
            <path d="M22.5147 15.8579L16.8579 21.5147L31 30L22.5147 15.8579Z" fill="#FFD640"/>
            </g>
            <path opacity="0.4" d="M43.6064 21.8558L31.75 15.0105C31.2859 14.7426 30.7141 14.7426 30.25 15.0105C28.8555 15.8156 27.8675 16.386 27.2859 16.7219C26.0754 17.4207 25.0873 17.9912 24.3218 18.4332C23.0044 19.1938 21.0283 20.3347 18.3936 21.8558" stroke="white" strokeLinecap="round"/>
            <path opacity="0.4" d="M43.6064 38.11L31.75 44.9553C31.2859 45.2232 30.7141 45.2232 30.25 44.9553" stroke="white" strokeLinecap="round"/>
            <path d="M30.25 15.0107C28.8556 15.8158 27.8675 16.3863 27.2859 16.7221" stroke="white" strokeLinecap="round"/>
            </g>
            <g filter="url(#filter3_d_62_470)">
            <path d="M28.4498 26.4901L31 22.769L33.5502 26.4901L37.8772 27.7656L35.1263 31.3409L35.2503 35.8502L31 34.3388L26.7497 35.8502L26.8737 31.3409L24.1228 27.7656L28.4498 26.4901Z" fill="white"/>
            <path d="M31.8249 22.2037C31.6384 21.9317 31.3298 21.769 31 21.769C30.6702 21.769 30.3616 21.9317 30.1751 22.2037L27.8259 25.6314L23.84 26.8064C23.5237 26.8997 23.2737 27.1429 23.1717 27.4566C23.0698 27.7703 23.1291 28.114 23.3303 28.3754L25.8643 31.6688L25.75 35.8227C25.741 36.1524 25.895 36.4654 26.1619 36.6592C26.4287 36.8531 26.7739 36.9029 27.0847 36.7924L31 35.4001L34.9153 36.7924C35.226 36.9029 35.5713 36.8531 35.8381 36.6592C36.1049 36.4654 36.259 36.1524 36.2499 35.8227L36.1357 31.6688L38.6697 28.3754C38.8708 28.114 38.9301 27.7703 38.8282 27.4566C38.7263 27.1429 38.4763 26.8997 38.1599 26.8064L34.174 25.6314L31.8249 22.2037Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            </g>
            <path d="M28.4498 26.4901L31 22.769L33.5502 26.4901L37.8772 27.7656L35.1263 31.3409L35.2503 35.8502L31 34.3388L26.7497 35.8502L26.8737 31.3409L24.1228 27.7656L28.4498 26.4901Z" fill="url(#paint9_linear_62_470)"/>
            <path opacity="0.4" d="M30.9999 30.0001V22.769L28.4158 26.4389L30.9999 30.0001Z" fill="url(#paint10_linear_62_470)"/>
            <path opacity="0.8" d="M31 30.0002L28.4159 26.439L24.1228 27.7657L31 30.0002Z" fill="url(#paint11_linear_62_470)"/>
            <path opacity="0.5" d="M31.0001 30L26.8159 31.3613L26.7498 35.8501L31.0001 30Z" fill="url(#paint12_linear_62_470)"/>
            <path opacity="0.4" d="M35.2503 35.8501L35.1841 31.3613L31 30L35.2503 35.8501Z" fill="url(#paint13_linear_62_470)"/>
            <path d="M35.1841 31.3614L37.8772 27.7656L31 30.0002L35.1841 31.3614Z" fill="#FEBA1B"/>
            <path opacity="0.6" d="M37.8772 27.7657L33.5841 26.439L31 30.0002L37.8772 27.7657Z" fill="url(#paint14_linear_62_470)"/>
            <g filter="url(#filter4_d_62_470)">
            <path fillRule="evenodd" clipRule="evenodd" d="M41.9109 23.7799L41.3916 23.5751C41.0739 23.4498 40.918 23.0908 41.0433 22.7732C41.1061 22.6138 41.2322 22.4877 41.3916 22.4249L41.9109 22.2201C42.5098 21.9839 42.9839 21.5098 43.2201 20.9109L43.4249 20.3916C43.5502 20.0739 43.9092 19.918 44.2268 20.0433C44.3862 20.1061 44.5123 20.2322 44.5751 20.3916L44.7799 20.9109C45.0161 21.5098 45.4902 21.9839 46.0891 22.2201L46.6084 22.4249C46.9261 22.5502 47.082 22.9092 46.9567 23.2268C46.8939 23.3862 46.7678 23.5123 46.6084 23.5751L46.0891 23.7799C45.4902 24.0161 45.0161 24.4902 44.7799 25.0891L44.5751 25.6084C44.4498 25.9261 44.0908 26.082 43.7732 25.9567C43.6138 25.8939 43.4877 25.7678 43.4249 25.6084L43.2201 25.0891C42.9839 24.4902 42.5098 24.0161 41.9109 23.7799Z" fill="white"/>
            </g>
            <g filter="url(#filter5_d_62_470)">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.6073 40.52L19.261 40.3834C19.0493 40.2999 18.9453 40.0605 19.0289 39.8488C19.0707 39.7426 19.1548 39.6585 19.261 39.6166L19.6073 39.48C20.0065 39.3226 20.3226 39.0065 20.48 38.6073L20.6166 38.261C20.7001 38.0493 20.9395 37.9453 21.1512 38.0289C21.2574 38.0707 21.3415 38.1548 21.3834 38.261L21.52 38.6073C21.6774 39.0065 21.9935 39.3226 22.3927 39.48L22.739 39.6166C22.9507 39.7001 23.0547 39.9395 22.9711 40.1512C22.9293 40.2574 22.8452 40.3415 22.739 40.3834L22.3927 40.52C21.9935 40.6774 21.6774 40.9935 21.52 41.3927L21.3834 41.739C21.2999 41.9507 21.0605 42.0547 20.8488 41.9711C20.7426 41.9293 20.6585 41.8452 20.6166 41.739L20.48 41.3927C20.3226 40.9935 20.0065 40.6774 19.6073 40.52Z" fill="white"/>
            </g>
            <g filter="url(#filter6_d_62_470)">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.7591 25.1499L15.3263 24.9793C15.0616 24.8749 14.9317 24.5757 15.0361 24.311C15.0884 24.1782 15.1935 24.0731 15.3263 24.0207L15.7591 23.8501C16.2582 23.6532 16.6532 23.2582 16.8501 22.7591L17.0207 22.3263C17.1251 22.0616 17.4243 21.9317 17.689 22.0361C17.8218 22.0884 17.9269 22.1935 17.9793 22.3263L18.1499 22.7591C18.3468 23.2582 18.7418 23.6532 19.2409 23.8501L19.6737 24.0207C19.9384 24.1251 20.0683 24.4243 19.9639 24.689C19.9116 24.8218 19.8065 24.9269 19.6737 24.9793L19.2409 25.1499C18.7418 25.3468 18.3468 25.7418 18.1499 26.2409L17.9793 26.6737C17.8749 26.9384 17.5757 27.0683 17.311 26.9639C17.1782 26.9116 17.0731 26.8065 17.0207 26.6737L16.8501 26.2409C16.6532 25.7418 16.2582 25.3468 15.7591 25.1499Z" fill="white"/>
            </g>
            <g filter="url(#filter7_d_62_470)">
            <path fillRule="evenodd" clipRule="evenodd" d="M41.4555 39.89L41.1958 39.7876C41.037 39.7249 40.959 39.5454 41.0216 39.3866C41.0531 39.3069 41.1161 39.2439 41.1958 39.2124L41.4555 39.11C41.7549 38.9919 41.9919 38.7549 42.11 38.4555L42.2124 38.1958C42.2751 38.037 42.4546 37.959 42.6134 38.0216C42.6931 38.0531 42.7561 38.1161 42.7876 38.1958L42.89 38.4555C43.0081 38.7549 43.2451 38.9919 43.5445 39.11L43.8042 39.2124C43.963 39.2751 44.041 39.4546 43.9784 39.6134C43.9469 39.6931 43.8839 39.7561 43.8042 39.7876L43.5445 39.89C43.2451 40.0081 43.0081 40.2451 42.89 40.5445L42.7876 40.8042C42.7249 40.963 42.5454 41.041 42.3866 40.9784C42.3069 40.9469 42.2439 40.8839 42.2124 40.8042L42.11 40.5445C41.9919 40.2451 41.7549 40.0081 41.4555 39.89Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d_62_470" x="5.76831" y="27" width="34.1599" height="40.5039" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.401412 0 0 0 0 0.333333 0 0 0 0 0.819608 0 0 0 0.2 0"/>
            <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_470"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_470" result="shape"/>
            </filter>
            <filter id="filter1_d_62_470" x="22.0718" y="27" width="34.1599" height="40.5039" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.401412 0 0 0 0 0.333333 0 0 0 0 0.819608 0 0 0 0.2 0"/>
            <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_470"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_470" result="shape"/>
            </filter>
            <filter id="filter2_d_62_470" x="14.1436" y="12.3096" width="33.7129" height="37.3809" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.927721 0 0 0 0 0.665867 0 0 0 0 0.0535899 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_470"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_470" result="shape"/>
            </filter>
            <filter id="filter3_d_62_470" x="20.1228" y="19.769" width="21.7544" height="21.0811" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.733333 0 0 0 0 0.105882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_470"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_470" result="shape"/>
            </filter>
            <filter id="filter4_d_62_470" x="39" y="18" width="10" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_470"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_470" result="shape"/>
            </filter>
            <filter id="filter5_d_62_470" x="17" y="36" width="8" height="8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_470"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_470" result="shape"/>
            </filter>
            <filter id="filter6_d_62_470" x="13" y="20" width="9" height="9" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_470"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_470" result="shape"/>
            </filter>
            <filter id="filter7_d_62_470" x="39" y="36" width="7" height="7" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_470"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_470" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_62_470" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6F61EC"/>
            <stop offset="1" stopColor="#3D2CD4"/>
            </linearGradient>
            <linearGradient id="paint1_linear_62_470" x1="54" y1="14" x2="54" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7C71A"/>
            <stop offset="1" stopColor="#FBAA00"/>
            </linearGradient>
            <linearGradient id="paint2_linear_62_470" x1="54" y1="14" x2="54" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint3_linear_62_470" x1="8" y1="14" x2="8" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7C71A"/>
            <stop offset="1" stopColor="#FBAA00"/>
            </linearGradient>
            <linearGradient id="paint4_linear_62_470" x1="8" y1="14" x2="8" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint5_linear_62_470" x1="18" y1="10.3535" x2="18" y2="26.9998" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7C71A"/>
            <stop offset="1" stopColor="#FBAA00"/>
            </linearGradient>
            <linearGradient id="paint6_linear_62_470" x1="18" y1="10.3535" x2="18" y2="26.9998" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint7_linear_62_470" x1="8" y1="7" x2="8" y2="53" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE046"/>
            <stop offset="1" stopColor="#F9B800"/>
            </linearGradient>
            <linearGradient id="paint8_linear_62_470" x1="15" y1="14" x2="15" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF550"/>
            <stop offset="1" stopColor="#FFD541"/>
            </linearGradient>
            <linearGradient id="paint9_linear_62_470" x1="23.7688" y1="22.769" x2="23.7688" y2="37.2312" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCA50E"/>
            <stop offset="1" stopColor="#FFC823"/>
            </linearGradient>
            <linearGradient id="paint10_linear_62_470" x1="28.4158" y1="20.9613" x2="24.1398" y2="24.0174" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFEC36" stopOpacity="0.467505"/>
            <stop offset="1" stopColor="#FFF7AB"/>
            </linearGradient>
            <linearGradient id="paint11_linear_62_470" x1="24.1663" y1="27.318" x2="28.1959" y2="32.2782" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFED08" stopOpacity="0.8"/>
            <stop offset="1" stopColor="white"/>
            </linearGradient>
            <linearGradient id="paint12_linear_62_470" x1="28.8749" y1="37.3126" x2="32.29" y2="32.3502" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFED08" stopOpacity="0.01"/>
            <stop offset="1" stopColor="#FFEF63"/>
            </linearGradient>
            <linearGradient id="paint13_linear_62_470" x1="31" y1="28.5375" x2="27.5849" y2="33.4999" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFEC36" stopOpacity="0.467505"/>
            <stop offset="1" stopColor="#FFE94A"/>
            </linearGradient>
            <linearGradient id="paint14_linear_62_470" x1="31" y1="25.5487" x2="29.9198" y2="29.7205" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFEC36" stopOpacity="0.467505"/>
            <stop offset="1" stopColor="#FFF7AB"/>
            </linearGradient>
            </defs>
            </svg>
            
           }
           {
            level === "4" && <svg width="62" height="68" viewBox="0 0 62 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M48 56C49.1046 56 50 56.8954 50 58C50 59.1046 49.1046 60 48 60H30C29.8824 60 29.7673 59.9899 29.6553 59.9704C23.2305 59.687 17.3308 57.3828 12.5761 53.6779C12.1894 53.3766 11.6067 52.8771 11.1748 52.5013C10.8054 52.1799 10.3333 52 9.84362 52H5C3.89543 52 3 51.1046 3 50C3 48.8954 3.89543 48 5 48H7C8.10457 48 9 47.1046 9 46C9 44.8954 8.10457 44 7 44H2C0.89543 44 0 43.1046 0 42C0 40.8954 0.89543 40 2 40H3C4.10457 40 5 39.1046 5 38C5 36.8954 4.10457 36 3 36C2.1913 36 1.49962 35.4171 1.36506 34.6196C1.31617 34.3299 1.27734 34.0966 1.27093 34.0492C1.09227 32.7249 1 31.3732 1 30C1 13.4315 14.4315 0 31 0C36 0 41 0 46 0C47.1046 0 48 0.89543 48 2C48 3.10457 47.1046 4 46 4H43C41.8954 4 41 4.89543 41 6C41 7.10457 41.8954 8 43 8H55C56.1046 8 57 8.89543 57 10C57 11.1038 56.1058 11.9988 55.0022 12L52 12C50.8954 12 50 12.8954 50 14C50 15.1046 50.8954 16 52 16H56.306C57.0624 16 57.7556 16.4259 58.0835 17.1075C58.2807 17.5171 58.488 17.959 58.6237 18.2783C60.1536 21.8793 61 25.8408 61 30C61 31.3068 60.9164 32.5942 60.7544 33.8569C60.7271 34.0692 60.6853 34.3418 60.6398 34.6208C60.5093 35.4213 59.8111 36 59 36C57.8954 36 57 36.8954 57 38C57 39.1046 57.8954 40 59 40H60C61.1046 40 62 40.8954 62 42C62 43.1046 61.1046 44 60 44H58.7162C57.9901 44 57.3224 44.3942 56.9597 45.0232C56.7241 45.4317 56.4621 45.8761 56.2675 46.1794C55.8114 46.8903 55.326 47.5807 54.8132 48.2489C54.2981 48.9201 53.7553 49.5688 53.1864 50.1934C52.8743 50.5362 52.3685 51.044 51.974 51.4341C51.605 51.799 51.1061 52 50.5871 52H45C43.8954 52 43 52.8954 43 54C43 55.0969 43.883 55.9875 44.9769 55.9999L48 56Z" fill="url(#paint0_linear_62_527)"/>
            <g opacity="0.1">
            <path fillRule="evenodd" clipRule="evenodd" d="M27.9986 6.6766C29.855 5.60481 32.1422 5.60481 33.9986 6.6766L49.6971 15.7402C51.5535 16.8119 52.6971 18.7927 52.6971 20.9363V39.0634C52.6971 41.207 51.5535 43.1878 49.6971 44.2596L33.9986 53.3231C32.1422 54.3949 29.855 54.3949 27.9986 53.3231L12.3 44.2596C10.4436 43.1878 9.30005 41.207 9.30005 39.0634L9.30005 20.9363C9.30005 18.7927 10.4436 16.8119 12.3 15.7402L27.9986 6.6766Z" fill="#7705A4" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            <g filter="url(#filter0_d_62_527)">
            <path fillRule="evenodd" clipRule="evenodd" d="M17 27H33V57.382C33 58.1253 32.2177 58.6088 31.5528 58.2764L25 55L18.4472 58.2764C17.7823 58.6088 17 58.1253 17 57.382V27Z" fill="#32B4FF"/>
            </g>
            <g filter="url(#filter1_d_62_527)">
            <path fillRule="evenodd" clipRule="evenodd" d="M29 27H45V57.382C45 58.1253 44.2177 58.6088 43.5528 58.2764L37 55L30.4472 58.2764C29.7823 58.6088 29 58.1253 29 57.382V27Z" fill="#32B4FF"/>
            </g>
            <g filter="url(#filter2_d_62_527)">
            <path fillRule="evenodd" clipRule="evenodd" d="M23 32H39V62.382C39 63.1253 38.2177 63.6088 37.5528 63.2764L31 60L24.4472 63.2764C23.7823 63.6088 23 63.1253 23 62.382V32Z" fill="white"/>
            </g>
            <mask id="mask0_62_527" mask-type="luminance" maskUnits="userSpaceOnUse" x="23" y="32" width="16" height="32">
            <path fillRule="evenodd" clipRule="evenodd" d="M23 32H39V62.382C39 63.1253 38.2177 63.6088 37.5528 63.2764L31 60L24.4472 63.2764C23.7823 63.6088 23 63.1253 23 62.382V32Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_62_527)">
            <rect x="27" y="32" width="8" height="32" fill="#F55462"/>
            </g>
            <path style={{ mixBlendMode: 'multiply' }} opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M29.0001 10.1546C30.2377 9.44002 31.7625 9.44002 33.0001 10.1546L48.9187 19.3451C50.1563 20.0597 50.9187 21.3802 50.9187 22.8093V41.1905C50.9187 42.6195 50.1563 43.94 48.9187 44.6546L33.0001 53.8451C31.7625 54.5597 30.2377 54.5597 29.0001 53.8451L13.0815 44.6546C11.8439 43.94 11.0815 42.6195 11.0815 41.1905L11.0815 22.8093C11.0815 21.3802 11.8439 20.0597 13.0815 19.3451L29.0001 10.1546Z" fill="#7705A4"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M49 16.677C49 16.2681 49.249 15.9004 49.6286 15.7486L53.1772 14.3291C53.5713 14.1715 54 14.4617 54 14.8862V30.323C54 30.7319 53.751 31.0996 53.3714 31.2514L49 33V16.677Z" fill="url(#paint1_linear_62_527)" stroke="url(#paint2_linear_62_527)" strokeLinecap="round" strokeLinejoin="round"/>
            <mask id="mask1_62_527" mask-type="luminance" maskUnits="userSpaceOnUse" x="48" y="13" width="7" height="21">
            <path fillRule="evenodd" clipRule="evenodd" d="M49 16.677C49 16.2681 49.249 15.9004 49.6286 15.7486L53.1772 14.3291C53.5713 14.1715 54 14.4617 54 14.8862V30.323C54 30.7319 53.751 31.0996 53.3714 31.2514L49 33V16.677Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            </mask>
            <g mask="url(#mask1_62_527)">
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.6" filter="url(#filter3_i_62_527)">
            <path d="M49.5001 22.8335L55.1924 20.4617C55.4473 20.3555 55.5679 20.0627 55.4617 19.8078C55.3554 19.5529 55.0627 19.4324 54.8078 19.5386L48.8078 22.0386C48.6215 22.1162 49.5001 22.8335 49.5001 22.8335Z" fill="#FABC10"/>
            </g>
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.6" filter="url(#filter4_i_62_527)">
            <path d="M49.5001 28.8335L55.1924 26.4617C55.4473 26.3555 55.5679 26.0627 55.4617 25.8078C55.3554 25.5529 55.0627 25.4324 54.8078 25.5386L48.8078 28.0386C48.6215 28.1162 49.5001 28.8335 49.5001 28.8335Z" fill="#FABC10"/>
            </g>
            <g opacity="0.04">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.9985 6.6766C32.1421 5.60481 29.8549 5.60481 27.9985 6.6766L12.3 15.7402C10.4436 16.8119 9.29998 18.7927 9.29998 20.9363V39.0634C9.29998 41.207 10.4436 43.1878 12.3 44.2596L27.9985 53.3231C29.8549 54.3949 32.1421 54.3949 33.9985 53.3231L49.697 44.2596C51.5534 43.1878 52.697 41.207 52.697 39.0634L52.697 20.9363C52.697 18.7927 51.5534 16.8119 49.697 15.7402L33.9985 6.6766Z" fill="#7705A4" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M13 16.677C13 16.2681 12.751 15.9004 12.3714 15.7486L8.82283 14.3291C8.42872 14.1715 8 14.4617 8 14.8862V30.323C8 30.7319 8.24895 31.0996 8.62861 31.2514L13 33V16.677Z" fill="url(#paint3_linear_62_527)" stroke="url(#paint4_linear_62_527)" strokeLinecap="round" strokeLinejoin="round"/>
            <mask id="mask2_62_527" mask-type="luminance" maskUnits="userSpaceOnUse" x="7" y="13" width="7" height="21">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 16.677C13 16.2681 12.751 15.9004 12.3714 15.7486L8.82283 14.3291C8.42872 14.1715 8 14.4617 8 14.8862V30.323C8 30.7319 8.24895 31.0996 8.62861 31.2514L13 33V16.677Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            </mask>
            <g mask="url(#mask2_62_527)">
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.6" filter="url(#filter5_i_62_527)">
            <path d="M12.5001 22.8335L6.80782 20.4617C6.55292 20.3555 6.43238 20.0627 6.53859 19.8078C6.6448 19.5529 6.93754 19.4324 7.19244 19.5386L13.1924 22.0386C13.3788 22.1162 12.5001 22.8335 12.5001 22.8335Z" fill="#FABC10"/>
            </g>
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.6" filter="url(#filter6_i_62_527)">
            <path d="M12.5001 28.8335L6.80782 26.4617C6.55292 26.3555 6.43238 26.0627 6.53859 25.8078C6.6448 25.5529 6.93754 25.4324 7.19244 25.5386L13.1924 28.0386C13.3788 28.1162 12.5001 28.8335 12.5001 28.8335Z" fill="#FABC10"/>
            </g>
            <g opacity="0.04">
            <path fillRule="evenodd" clipRule="evenodd" d="M27.9986 6.6766C29.855 5.60481 32.1422 5.60481 33.9986 6.6766L49.6971 15.7402C51.5535 16.8119 52.6971 18.7927 52.6971 20.9363V39.0634C52.6971 41.207 51.5535 43.1878 49.6971 44.2596L33.9986 53.3231C32.1422 54.3949 29.855 54.3949 27.9986 53.3231L12.3 44.2596C10.4436 43.1878 9.30005 41.207 9.30005 39.0634L9.30005 20.9363C9.30005 18.7927 10.4436 16.8119 12.3 15.7402L27.9986 6.6766Z" fill="#7705A4" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M45 11.3256C45 10.6612 44.3641 10.1815 43.7253 10.364L31 13.9998L18.2747 10.364C17.6359 10.1815 17 10.6612 17 11.3256V25.9998C17 26.5521 17.4477 26.9998 18 26.9998H44C44.5523 26.9998 45 26.5521 45 25.9998V11.3256Z" fill="url(#paint5_linear_62_527)" stroke="url(#paint6_linear_62_527)" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M29 8.1547C30.2376 7.44017 31.7624 7.44017 33 8.1547L48.9186 17.3453C50.1562 18.0598 50.9186 19.3803 50.9186 20.8094V39.1906C50.9186 40.6197 50.1562 41.9402 48.9186 42.6547L33 51.8453C31.7624 52.5598 30.2376 52.5598 29 51.8453L13.0814 42.6547C11.8438 41.9402 11.0814 40.6197 11.0814 39.1906V20.8094C11.0814 19.3803 11.8438 18.0598 13.0814 17.3453L29 8.1547Z" fill="url(#paint7_linear_62_527)" stroke="#FFF04D" stopOpacity="0.4"/>
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.8" filter="url(#filter7_i_62_527)">
            <path fillRule="evenodd" clipRule="evenodd" d="M46.6709 19.1886L32.5165 11.0069C31.5781 10.4645 30.4218 10.4645 29.4834 11.0069L15.329 19.1886C14.3905 19.7311 13.8124 20.7335 13.8124 21.8184V27.7208L12.665 29.444C12.4414 29.7797 12.4414 30.2169 12.665 30.5525L13.8124 32.2758V38.1818C13.8124 39.2667 14.3905 40.2691 15.329 40.8116L29.4834 48.9933C30.4218 49.5357 31.5781 49.5357 32.5165 48.9933L46.6709 40.8116C47.6094 40.2691 48.1875 39.2667 48.1875 38.1818V32.2758L49.335 30.5525C49.5585 30.2169 49.5585 29.7797 49.335 29.444L48.1875 27.7208V21.8184C48.1875 20.7335 47.6094 19.7311 46.6709 19.1886ZM14.8234 32.2759V38.1817C14.8234 38.905 15.2088 39.5733 15.8345 39.935L29.9889 48.1166C30.6145 48.4783 31.3853 48.4783 32.011 48.1166L46.1654 39.935C46.791 39.5733 47.1764 38.905 47.1764 38.1817V32.2758L46.029 30.5525C45.8054 30.2169 45.8054 29.7797 46.029 29.444L47.1764 27.7208V21.8184C47.1764 21.0951 46.791 20.4268 46.1654 20.0652L32.011 11.8835C31.3853 11.5219 30.6145 11.5219 29.9889 11.8835L15.8345 20.0652C15.2088 20.4268 14.8234 21.0951 14.8234 21.8184V27.7207L15.971 29.444C16.1945 29.7797 16.1945 30.2169 15.971 30.5525L14.8234 32.2759Z" fill="#FABC10"/>
            </g>
            <path d="M32.7501 8.58756C31.6672 7.96235 30.333 7.96235 29.2501 8.58756L13.3315 17.7782C12.2486 18.4034 11.5815 19.5588 11.5815 20.8093L11.5815 39.1904C11.5815 40.4409 12.2486 41.5963 13.3315 42.2215L29.2501 51.4121C30.333 52.0374 31.6672 52.0374 32.7501 51.4121L48.6687 42.2215C49.7516 41.5963 50.4187 40.4409 50.4187 39.1904V20.8093C50.4187 19.5588 49.7516 18.4034 48.6687 17.7782L32.7501 8.58756Z" stroke="#F9B307"/>
            <path opacity="0.4" d="M32.75 51.4124C34.6222 50.3315 35.9487 49.5656 36.7296 49.1147" stroke="white" strokeLinecap="round"/>
            <path d="M50.4187 39.1905V20.8093C50.4187 19.5588 49.7516 18.4034 48.6687 17.7782L32.7501 8.58756C31.6672 7.96235 30.333 7.96235 29.2501 8.58756L13.3315 17.7782C12.2486 18.4034 11.5815 19.5588 11.5815 20.8093L11.5815 39.1905" stroke="#FAC00E" strokeLinecap="round"/>
            <path opacity="0.6" d="M50.4187 20.8093C50.4187 19.5588 49.7516 18.4034 48.6687 17.7782L32.7501 8.58756C31.6672 7.96235 30.333 7.96235 29.2501 8.58756L13.3315 17.7782C12.2486 18.4034 11.5815 19.5588 11.5815 20.8093" stroke="#FDDB3D" strokeLinecap="round"/>
            <path opacity="0.6" d="M32.7501 8.58756C31.6672 7.96235 30.333 7.96235 29.2501 8.58756C29.2501 8.58756 23.9439 11.6511 21.2908 13.1829" stroke="white" strokeLinecap="round"/>
            <path d="M29.2499 8.58789C29.2499 8.58789 26.4417 10.2092 25.2703 10.8855" stroke="white" strokeLinecap="round"/>
            <g filter="url(#filter8_d_62_527)">
            <path fillRule="evenodd" clipRule="evenodd" d="M30 14.5774C30.6188 14.2201 31.3812 14.2201 32 14.5774L43.8564 21.4226C44.4752 21.7799 44.8564 22.4402 44.8564 23.1547V36.8453C44.8564 37.5598 44.4752 38.2201 43.8564 38.5774L32 45.4226C31.3812 45.7799 30.6188 45.7799 30 45.4226L18.1436 38.5774C17.5248 38.2201 17.1436 37.5598 17.1436 36.8453V23.1547C17.1436 22.4402 17.5248 21.7799 18.1436 21.4226L30 14.5774Z" fill="url(#paint8_linear_62_527)"/>
            <path d="M32.25 14.1443C31.4765 13.6978 30.5235 13.6978 29.75 14.1443L17.8936 20.9896C17.1201 21.4362 16.6436 22.2615 16.6436 23.1547V36.8453C16.6436 37.7385 17.1201 38.5638 17.8936 39.0104L29.75 45.8557C30.5235 46.3022 31.4765 46.3022 32.25 45.8557L44.1064 39.0104C44.8799 38.5638 45.3564 37.7385 45.3564 36.8453V23.1547C45.3564 22.2615 44.8799 21.4362 44.1064 20.9896L32.25 14.1443Z" stroke="#F5900D" stopOpacity="0.1" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            <mask id="mask3_62_527" mask-type="luminance" maskUnits="userSpaceOnUse" x="17" y="14" width="28" height="32">
            <path fillRule="evenodd" clipRule="evenodd" d="M30 14.5774C30.6188 14.2201 31.3812 14.2201 32 14.5774L43.8564 21.4226C44.4752 21.7799 44.8564 22.4402 44.8564 23.1547V36.8453C44.8564 37.5598 44.4752 38.2201 43.8564 38.5774L32 45.4226C31.3812 45.7799 30.6188 45.7799 30 45.4226L18.1436 38.5774C17.5248 38.2201 17.1436 37.5598 17.1436 36.8453V23.1547C17.1436 22.4402 17.5248 21.7799 18.1436 21.4226L30 14.5774Z" fill="white"/>
            </mask>
            <g mask="url(#mask3_62_527)">
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.3">
            <path fillRule="evenodd" clipRule="evenodd" d="M31 30L35 14H27L31 30ZM31 30L47 26V34L31 30ZM31 30L39.4853 15.8579L45.1421 21.5147L31 30ZM31 30L39.4853 44.1421L45.1421 38.4853L31 30ZM31 30L27 46H35L31 30ZM31 30L15 34V26L31 30ZM31 30L22.5147 44.1421L16.8579 38.4853L31 30ZM22.5147 15.8579L16.8579 21.5147L31 30L22.5147 15.8579Z" fill="#FFD640"/>
            </g>
            <path opacity="0.4" d="M43.6064 21.8558L31.75 15.0105C31.2859 14.7426 30.7141 14.7426 30.25 15.0105C28.8555 15.8156 27.8675 16.386 27.2859 16.7219C26.0754 17.4207 25.0873 17.9912 24.3218 18.4332C23.0044 19.1938 21.0283 20.3347 18.3936 21.8558" stroke="white" strokeLinecap="round"/>
            <path opacity="0.4" d="M43.6064 38.11L31.75 44.9553C31.2859 45.2232 30.7141 45.2232 30.25 44.9553" stroke="white" strokeLinecap="round"/>
            <path d="M30.25 15.0107C28.8556 15.8158 27.8675 16.3863 27.2859 16.7221" stroke="white" strokeLinecap="round"/>
            </g>
            <g filter="url(#filter9_d_62_527)">
            <path fillRule="evenodd" clipRule="evenodd" d="M31 21L39 30L31 39L23 30L31 21Z" fill="white"/>
            <path d="M31.7474 20.3356C31.5576 20.1221 31.2856 20 31 20C30.7144 20 30.4424 20.1221 30.2526 20.3356L22.2526 29.3356C21.9158 29.7145 21.9158 30.2855 22.2526 30.6644L30.2526 39.6644C30.4424 39.8779 30.7144 40 31 40C31.2856 40 31.5576 39.8779 31.7474 39.6644L39.7474 30.6644C40.0842 30.2855 40.0842 29.7145 39.7474 29.3356L31.7474 20.3356Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M31 21L39 30H23L31 21Z" fill="url(#paint9_linear_62_527)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M31 39L39 30H23L31 39Z" fill="url(#paint10_linear_62_527)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M31 21L27.1428 30H34.8571L31 21Z" fill="url(#paint11_linear_62_527)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M31 39L27.1428 30H34.8571L31 39Z" fill="url(#paint12_linear_62_527)"/>
            <g filter="url(#filter10_d_62_527)">
            <path fillRule="evenodd" clipRule="evenodd" d="M41.9109 23.7799L41.3916 23.5751C41.0739 23.4498 40.918 23.0908 41.0433 22.7732C41.1061 22.6138 41.2322 22.4877 41.3916 22.4249L41.9109 22.2201C42.5098 21.9839 42.9839 21.5098 43.2201 20.9109L43.4249 20.3916C43.5502 20.0739 43.9092 19.918 44.2268 20.0433C44.3862 20.1061 44.5123 20.2322 44.5751 20.3916L44.7799 20.9109C45.0161 21.5098 45.4902 21.9839 46.0891 22.2201L46.6084 22.4249C46.9261 22.5502 47.082 22.9092 46.9567 23.2268C46.8939 23.3862 46.7678 23.5123 46.6084 23.5751L46.0891 23.7799C45.4902 24.0161 45.0161 24.4902 44.7799 25.0891L44.5751 25.6084C44.4498 25.9261 44.0908 26.082 43.7732 25.9567C43.6138 25.8939 43.4877 25.7678 43.4249 25.6084L43.2201 25.0891C42.9839 24.4902 42.5098 24.0161 41.9109 23.7799Z" fill="white"/>
            </g>
            <g filter="url(#filter11_d_62_527)">
            <path fillRule="evenodd" clipRule="evenodd" d="M21.6073 39.52L21.261 39.3834C21.0493 39.2999 20.9453 39.0605 21.0289 38.8488C21.0707 38.7426 21.1548 38.6585 21.261 38.6166L21.6073 38.48C22.0065 38.3226 22.3226 38.0065 22.48 37.6073L22.6166 37.261C22.7001 37.0493 22.9395 36.9453 23.1512 37.0289C23.2574 37.0707 23.3415 37.1548 23.3834 37.261L23.52 37.6073C23.6774 38.0065 23.9935 38.3226 24.3927 38.48L24.739 38.6166C24.9507 38.7001 25.0547 38.9395 24.9711 39.1512C24.9293 39.2574 24.8452 39.3415 24.739 39.3834L24.3927 39.52C23.9935 39.6774 23.6774 39.9935 23.52 40.3927L23.3834 40.739C23.2999 40.9507 23.0605 41.0547 22.8488 40.9711C22.7426 40.9293 22.6585 40.8452 22.6166 40.739L22.48 40.3927C22.3226 39.9935 22.0065 39.6774 21.6073 39.52Z" fill="white"/>
            </g>
            <g filter="url(#filter12_d_62_527)">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.7591 25.1499L15.3263 24.9793C15.0616 24.8749 14.9317 24.5757 15.0361 24.311C15.0884 24.1782 15.1935 24.0731 15.3263 24.0207L15.7591 23.8501C16.2582 23.6532 16.6532 23.2582 16.8501 22.7591L17.0207 22.3263C17.1251 22.0616 17.4243 21.9317 17.689 22.0361C17.8218 22.0884 17.9269 22.1935 17.9793 22.3263L18.1499 22.7591C18.3468 23.2582 18.7418 23.6532 19.2409 23.8501L19.6737 24.0207C19.9384 24.1251 20.0683 24.4243 19.9639 24.689C19.9116 24.8218 19.8065 24.9269 19.6737 24.9793L19.2409 25.1499C18.7418 25.3468 18.3468 25.7418 18.1499 26.2409L17.9793 26.6737C17.8749 26.9384 17.5757 27.0683 17.311 26.9639C17.1782 26.9116 17.0731 26.8065 17.0207 26.6737L16.8501 26.2409C16.6532 25.7418 16.2582 25.3468 15.7591 25.1499Z" fill="white"/>
            </g>
            <g filter="url(#filter13_d_62_527)">
            <path fillRule="evenodd" clipRule="evenodd" d="M41.4555 39.89L41.1958 39.7876C41.037 39.7249 40.959 39.5454 41.0216 39.3866C41.0531 39.3069 41.1161 39.2439 41.1958 39.2124L41.4555 39.11C41.7549 38.9919 41.9919 38.7549 42.11 38.4555L42.2124 38.1958C42.2751 38.037 42.4546 37.959 42.6134 38.0216C42.6931 38.0531 42.7561 38.1161 42.7876 38.1958L42.89 38.4555C43.0081 38.7549 43.2451 38.9919 43.5445 39.11L43.8042 39.2124C43.963 39.2751 44.041 39.4546 43.9784 39.6134C43.9469 39.6931 43.8839 39.7561 43.8042 39.7876L43.5445 39.89C43.2451 40.0081 43.0081 40.2451 42.89 40.5445L42.7876 40.8042C42.7249 40.963 42.5454 41.041 42.3866 40.9784C42.3069 40.9469 42.2439 40.8839 42.2124 40.8042L42.11 40.5445C41.9919 40.2451 41.7549 40.0081 41.4555 39.89Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d_62_527" x="15" y="27" width="20" height="35.3833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.247059 0 0 0 0 0.866667 0 0 0 0.2 0"/>
            <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_527"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_527" result="shape"/>
            </filter>
            <filter id="filter1_d_62_527" x="27" y="27" width="20" height="35.3833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.247059 0 0 0 0 0.866667 0 0 0 0.2 0"/>
            <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_527"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_527" result="shape"/>
            </filter>
            <filter id="filter2_d_62_527" x="21" y="32" width="20" height="35.3833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.247059 0 0 0 0 0.866667 0 0 0 0.2 0"/>
            <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_527"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_527" result="shape"/>
            </filter>
            <filter id="filter3_i_62_527" x="48.782" y="19.5" width="6.71826" height="4.3335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_527"/>
            </filter>
            <filter id="filter4_i_62_527" x="48.782" y="25.5" width="6.71826" height="4.3335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_527"/>
            </filter>
            <filter id="filter5_i_62_527" x="6.5" y="19.5" width="6.71826" height="4.3335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_527"/>
            </filter>
            <filter id="filter6_i_62_527" x="6.5" y="25.5" width="6.71826" height="4.3335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_527"/>
            </filter>
            <filter id="filter7_i_62_527" x="12.4973" y="10.6001" width="37.0054" height="39.7998" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_527"/>
            </filter>
            <filter id="filter8_d_62_527" x="14.1436" y="12.3096" width="33.7129" height="37.3809" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.927721 0 0 0 0 0.665867 0 0 0 0 0.0535899 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_527"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_527" result="shape"/>
            </filter>
            <filter id="filter9_d_62_527" x="19" y="18" width="24" height="26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.733333 0 0 0 0 0.105882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_527"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_527" result="shape"/>
            </filter>
            <filter id="filter10_d_62_527" x="39" y="18" width="10" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_527"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_527" result="shape"/>
            </filter>
            <filter id="filter11_d_62_527" x="19" y="35" width="8" height="8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_527"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_527" result="shape"/>
            </filter>
            <filter id="filter12_d_62_527" x="13" y="20" width="9" height="9" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_527"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_527" result="shape"/>
            </filter>
            <filter id="filter13_d_62_527" x="39" y="36" width="7" height="7" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_527"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_527" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_62_527" x1="0.954752" y1="0" x2="0.954752" y2="58.1521" gradientUnits="userSpaceOnUse">
            <stop stopColor="#AE66FF"/>
            <stop offset="1" stopColor="#7E07E0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_62_527" x1="54" y1="14" x2="54" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7C71A"/>
            <stop offset="1" stopColor="#FBAA00"/>
            </linearGradient>
            <linearGradient id="paint2_linear_62_527" x1="54" y1="14" x2="54" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint3_linear_62_527" x1="8" y1="14" x2="8" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7C71A"/>
            <stop offset="1" stopColor="#FBAA00"/>
            </linearGradient>
            <linearGradient id="paint4_linear_62_527" x1="8" y1="14" x2="8" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint5_linear_62_527" x1="17" y1="10.3535" x2="17" y2="26.9998" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7C71A"/>
            <stop offset="1" stopColor="#FBAA00"/>
            </linearGradient>
            <linearGradient id="paint6_linear_62_527" x1="17" y1="10.3535" x2="17" y2="26.9998" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint7_linear_62_527" x1="8" y1="7" x2="8" y2="53" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE046"/>
            <stop offset="1" stopColor="#F9B800"/>
            </linearGradient>
            <linearGradient id="paint8_linear_62_527" x1="15" y1="14" x2="15" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF550"/>
            <stop offset="1" stopColor="#FFD541"/>
            </linearGradient>
            <linearGradient id="paint9_linear_62_527" x1="23" y1="21" x2="23" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#27DEEB"/>
            <stop offset="1" stopColor="#08C9FF"/>
            </linearGradient>
            <linearGradient id="paint10_linear_62_527" x1="23" y1="30" x2="23" y2="39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#009BF6"/>
            <stop offset="1" stopColor="#00B5FF"/>
            </linearGradient>
            <linearGradient id="paint11_linear_62_527" x1="27.1428" y1="21" x2="27.1428" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8AFFFF"/>
            <stop offset="1" stopColor="#0DF3FF"/>
            </linearGradient>
            <linearGradient id="paint12_linear_62_527" x1="27.1428" y1="30" x2="27.1428" y2="39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00BAF3"/>
            <stop offset="1" stopColor="#00B5FF"/>
            </linearGradient>
            </defs>
            </svg>            
           }
           {
            level === "5" && <svg width="62" height="68" viewBox="0 0 62 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M48 56C49.1046 56 50 56.8954 50 58C50 59.1046 49.1046 60 48 60H30C29.8824 60 29.7673 59.9899 29.6553 59.9704C23.2305 59.687 17.3308 57.3828 12.5761 53.6779C12.1894 53.3766 11.6067 52.8771 11.1748 52.5013C10.8054 52.1799 10.3333 52 9.84362 52H5C3.89543 52 3 51.1046 3 50C3 48.8954 3.89543 48 5 48H7C8.10457 48 9 47.1046 9 46C9 44.8954 8.10457 44 7 44H2C0.89543 44 0 43.1046 0 42C0 40.8954 0.89543 40 2 40H3C4.10457 40 5 39.1046 5 38C5 36.8954 4.10457 36 3 36C2.1913 36 1.49962 35.4171 1.36506 34.6196C1.31617 34.3299 1.27734 34.0966 1.27093 34.0492C1.09227 32.7249 1 31.3732 1 30C1 13.4315 14.4315 0 31 0C36 0 41 0 46 0C47.1046 0 48 0.89543 48 2C48 3.10457 47.1046 4 46 4H43C41.8954 4 41 4.89543 41 6C41 7.10457 41.8954 8 43 8H55C56.1046 8 57 8.89543 57 10C57 11.1038 56.1058 11.9988 55.0022 12L52 12C50.8954 12 50 12.8954 50 14C50 15.1046 50.8954 16 52 16H56.306C57.0624 16 57.7556 16.4259 58.0835 17.1075C58.2807 17.5171 58.488 17.959 58.6237 18.2783C60.1536 21.8793 61 25.8408 61 30C61 31.3068 60.9164 32.5942 60.7544 33.8569C60.7271 34.0692 60.6853 34.3418 60.6398 34.6208C60.5093 35.4213 59.8111 36 59 36C57.8954 36 57 36.8954 57 38C57 39.1046 57.8954 40 59 40H60C61.1046 40 62 40.8954 62 42C62 43.1046 61.1046 44 60 44H58.7162C57.9901 44 57.3224 44.3942 56.9597 45.0232C56.7241 45.4317 56.4621 45.8761 56.2675 46.1794C55.8114 46.8903 55.326 47.5807 54.8132 48.2489C54.2981 48.9201 53.7553 49.5688 53.1864 50.1934C52.8743 50.5362 52.3685 51.044 51.974 51.4341C51.605 51.799 51.1061 52 50.5871 52H45C43.8954 52 43 52.8954 43 54C43 55.0969 43.883 55.9875 44.9769 55.9999L48 56Z" fill="url(#paint0_linear_62_595)"/>
            <g opacity="0.2">
            <path fillRule="evenodd" clipRule="evenodd" d="M27.9986 6.6766C29.855 5.60481 32.1422 5.60481 33.9986 6.6766L49.6971 15.7402C51.5535 16.8119 52.6971 18.7927 52.6971 20.9363V39.0634C52.6971 41.207 51.5535 43.1878 49.6971 44.2596L33.9986 53.3231C32.1422 54.3949 29.855 54.3949 27.9986 53.3231L12.3 44.2596C10.4436 43.1878 9.30005 41.207 9.30005 39.0634L9.30005 20.9363C9.30005 18.7927 10.4436 16.8119 12.3 15.7402L27.9986 6.6766Z" fill="#A4053A" fillOpacity="0.2" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            <g filter="url(#filter0_d_62_595)">
            <path fillRule="evenodd" clipRule="evenodd" d="M17 27H33V57.382C33 58.1253 32.2177 58.6088 31.5528 58.2764L25 55L18.4472 58.2764C17.7823 58.6088 17 58.1253 17 57.382V27Z" fill="#7F45F6"/>
            </g>
            <g filter="url(#filter1_d_62_595)">
            <path fillRule="evenodd" clipRule="evenodd" d="M29 27H45V57.382C45 58.1253 44.2177 58.6088 43.5528 58.2764L37 55L30.4472 58.2764C29.7823 58.6088 29 58.1253 29 57.382V27Z" fill="#7F45F6"/>
            </g>
            <g filter="url(#filter2_d_62_595)">
            <path fillRule="evenodd" clipRule="evenodd" d="M23 32H39V62.382C39 63.1253 38.2177 63.6088 37.5528 63.2764L31 60L24.4472 63.2764C23.7823 63.6088 23 63.1253 23 62.382V32Z" fill="white"/>
            </g>
            <mask id="mask0_62_595" mask-type="luminance" maskUnits="userSpaceOnUse" x="23" y="32" width="16" height="32">
            <path fillRule="evenodd" clipRule="evenodd" d="M23 32H39V62.382C39 63.1253 38.2177 63.6088 37.5528 63.2764L31 60L24.4472 63.2764C23.7823 63.6088 23 63.1253 23 62.382V32Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_62_595)">
            <rect x="27" y="32" width="8" height="32" fill="#F55462"/>
            </g>
            <path style={{ mixBlendMode: 'multiply' }} opacity="0.8" fillRule="evenodd" clipRule="evenodd" d="M29.0001 10.1546C30.2377 9.44002 31.7625 9.44002 33.0001 10.1546L48.9187 19.3451C50.1563 20.0597 50.9187 21.3802 50.9187 22.8093V41.1905C50.9187 42.6195 50.1563 43.94 48.9187 44.6546L33.0001 53.8451C31.7625 54.5597 30.2377 54.5597 29.0001 53.8451L13.0815 44.6546C11.8439 43.94 11.0815 42.6195 11.0815 41.1905L11.0815 22.8093C11.0815 21.3802 11.8439 20.0597 13.0815 19.3451L29.0001 10.1546Z" fill="#A4053A" fillOpacity="0.2"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M14 18.5L9 16.5V15.5L4.19839 13.4993C3.72617 13.3026 3.24011 13.7491 3.39625 14.2363L9.09212 32.0074C9.19114 32.3164 9.43389 32.5581 9.74327 32.6558L14 34V18.5Z" fill="url(#paint1_linear_62_595)" stroke="url(#paint2_linear_62_595)" strokeLinecap="round" strokeLinejoin="round"/>
            <mask id="mask1_62_595" mask-type="luminance" maskUnits="userSpaceOnUse" x="3" y="14" width="12" height="20">
            <path fillRule="evenodd" clipRule="evenodd" d="M14 19.8541C14 19.0363 13.5021 18.3008 12.7428 17.9971L9.46782 16.6871C9.18527 16.5741 9 16.3005 9 15.9961C9 15.6957 8.81935 15.4247 8.54202 15.3092L6.99464 14.6644C5.42055 14.0086 3.80036 15.4971 4.32084 17.121L8.93423 31.5148C9.13228 32.1327 9.61779 32.6161 10.2365 32.8115L11.3977 33.1782C12.6868 33.5853 14 32.6229 14 31.2711V19.8541Z" fill="white" stroke="white"/>
            </mask>
            <g mask="url(#mask1_62_595)">
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.6" filter="url(#filter3_i_62_595)">
            <path d="M14.1858 24.0359C14.4422 24.1384 14.5669 24.4294 14.4644 24.6858C14.3618 24.9422 14.0708 25.0669 13.8144 24.9644L8.81444 22.9644C8.62461 22.8884 8.50013 22.7046 8.50013 22.5001V21.8335L2.80782 19.4617C2.55292 19.3555 2.43238 19.0627 2.53859 18.8078C2.6448 18.5529 2.93754 18.4324 3.19244 18.5386L9.19244 21.0386C9.37876 21.1162 9.50013 21.2983 9.50013 21.5001V22.1616L14.1858 24.0359Z" fill="#FABC10"/>
            </g>
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.6" filter="url(#filter4_i_62_595)">
            <path d="M15.1858 30.0359C15.4422 30.1384 15.5669 30.4294 15.4644 30.6858C15.3618 30.9422 15.0708 31.0669 14.8144 30.9644L9.81444 28.9644C9.62461 28.8884 9.50013 28.7046 9.50013 28.5001V27.8335L3.80782 25.4617C3.55292 25.3555 3.43238 25.0627 3.53859 24.8078C3.6448 24.5529 3.93754 24.4324 4.19244 24.5386L10.1924 27.0386C10.3788 27.1162 10.5001 27.2983 10.5001 27.5001V28.1616L15.1858 30.0359Z" fill="#FABC10"/>
            </g>
            <g opacity="0.2">
            <path fillRule="evenodd" clipRule="evenodd" d="M27.9986 6.6766C29.855 5.60481 32.1422 5.60481 33.9986 6.6766L49.6971 15.7402C51.5535 16.8119 52.6971 18.7927 52.6971 20.9363V39.0634C52.6971 41.207 51.5535 43.1878 49.6971 44.2596L33.9986 53.3231C32.1422 54.3949 29.855 54.3949 27.9986 53.3231L12.3 44.2596C10.4436 43.1878 9.30005 41.207 9.30005 39.0634L9.30005 20.9363C9.30005 18.7927 10.4436 16.8119 12.3 15.7402L27.9986 6.6766Z" fill="#A4053A" fillOpacity="0.2" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M48 18.5L53 16.5V15.5L57.8016 13.4993C58.2738 13.3026 58.7599 13.7491 58.6037 14.2363L52.9079 32.0074C52.8089 32.3164 52.5661 32.5581 52.2567 32.6558L48 34V18.5Z" fill="url(#paint3_linear_62_595)" stroke="url(#paint4_linear_62_595)" strokeLinecap="round" strokeLinejoin="round"/>
            <mask id="mask2_62_595" mask-type="luminance" maskUnits="userSpaceOnUse" x="47" y="14" width="12" height="20">
            <path fillRule="evenodd" clipRule="evenodd" d="M48 19.8541C48 19.0363 48.4979 18.3008 49.2572 17.9971L52.5322 16.6871C52.8147 16.5741 53 16.3005 53 15.9961C53 15.6957 53.1806 15.4247 53.458 15.3092L55.0054 14.6644C56.5795 14.0086 58.1996 15.4971 57.6792 17.121L53.0658 31.5148C52.8677 32.1327 52.3822 32.6161 51.7635 32.8115L50.6023 33.1782C49.3132 33.5853 48 32.6229 48 31.2711V19.8541Z" fill="white" stroke="white"/>
            </mask>
            <g mask="url(#mask2_62_595)">
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.6" filter="url(#filter5_i_62_595)">
            <path d="M47.8144 24.0359C47.558 24.1384 47.4333 24.4294 47.5359 24.6858C47.6384 24.9422 47.9294 25.0669 48.1858 24.9644L53.1858 22.9644C53.3756 22.8884 53.5001 22.7046 53.5001 22.5001V21.8335L59.1924 19.4617C59.4473 19.3555 59.5679 19.0627 59.4617 18.8078C59.3554 18.5529 59.0627 18.4324 58.8078 18.5386L52.8078 21.0386C52.6215 21.1162 52.5001 21.2983 52.5001 21.5001V22.1616L47.8144 24.0359Z" fill="#FABC10"/>
            </g>
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.6" filter="url(#filter6_i_62_595)">
            <path d="M46.8144 30.0359C46.558 30.1384 46.4333 30.4294 46.5359 30.6858C46.6384 30.9422 46.9294 31.0669 47.1858 30.9644L52.1858 28.9644C52.3756 28.8884 52.5001 28.7046 52.5001 28.5001V27.8335L58.1924 25.4617C58.4473 25.3555 58.5679 25.0627 58.4617 24.8078C58.3554 24.5529 58.0627 24.4324 57.8078 24.5386L51.8078 27.0386C51.6215 27.1162 51.5001 27.2983 51.5001 27.5001V28.1616L46.8144 30.0359Z" fill="#FABC10"/>
            </g>
            <g opacity="0.2">
            <path fillRule="evenodd" clipRule="evenodd" d="M34.0014 6.6766C32.145 5.60481 29.8578 5.60481 28.0014 6.6766L12.3029 15.7402C10.4465 16.8119 9.30291 18.7927 9.30291 20.9363V39.0634C9.30291 41.207 10.4465 43.1878 12.3029 44.2596L28.0014 53.3231C29.8578 54.3949 32.145 54.3949 34.0014 53.3231L49.7 44.2596C51.5564 43.1878 52.7 41.207 52.7 39.0634L52.7 20.9363C52.7 18.7927 51.5564 16.8119 49.7 15.7402L34.0014 6.6766Z" fill="#A4053A" fillOpacity="0.2" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M13 36L9.47398 37.763C9.17752 37.9112 8.97377 38.1967 8.92996 38.5253L8.16023 44.2982C8.09459 44.7906 8.6214 45.1449 9.05266 44.8985L15 41.5L13 36Z" fill="url(#paint5_linear_62_595)" stroke="url(#paint6_linear_62_595)" strokeLinecap="round" strokeLinejoin="round"/>
            <mask id="mask3_62_595" mask-type="luminance" maskUnits="userSpaceOnUse" x="8" y="36" width="8" height="9">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.7669 38.1089C13.3584 36.9855 12.0621 36.469 10.9929 37.0036L9.94796 37.526C9.35504 37.8225 8.94754 38.3935 8.85993 39.0505L8.53412 41.4941C8.3153 43.1353 10.0713 44.3164 11.5089 43.4949L13.5368 42.3361C14.3822 41.853 14.7568 40.8313 14.4241 39.9162L13.7669 38.1089Z" fill="white" stroke="white"/>
            </mask>
            <g mask="url(#mask3_62_595)">
            <g opacity="0.1">
            <path fillRule="evenodd" clipRule="evenodd" d="M27.7801 6.6766C29.6365 5.60481 31.9237 5.60481 33.7801 6.6766L49.4786 15.7402C51.335 16.8119 52.4786 18.7927 52.4786 20.9363V39.0634C52.4786 41.207 51.335 43.1878 49.4786 44.2596L33.7801 53.3231C31.9237 54.3949 29.6365 54.3949 27.7801 53.3231L12.0815 44.2596C10.2251 43.1878 9.08154 41.207 9.08154 39.0634L9.08154 20.9363C9.08154 18.7927 10.2251 16.8119 12.0815 15.7402L27.7801 6.6766Z" fill="#F37E02" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M49 36L52.526 37.763C52.8225 37.9112 53.0262 38.1967 53.07 38.5253L53.8398 44.2982C53.9054 44.7906 53.3786 45.1449 52.9473 44.8985L47 41.5L49 36Z" fill="url(#paint7_linear_62_595)" stroke="url(#paint8_linear_62_595)" strokeLinecap="round" strokeLinejoin="round"/>
            <mask id="mask4_62_595" mask-type="luminance" maskUnits="userSpaceOnUse" x="46" y="35" width="9" height="11">
            <path fillRule="evenodd" clipRule="evenodd" d="M49 36L52.526 37.763C52.8225 37.9112 53.0262 38.1967 53.07 38.5253L53.8398 44.2982C53.9054 44.7906 53.3786 45.1449 52.9473 44.8985L47 41.5L49 36Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            </mask>
            <g mask="url(#mask4_62_595)">
            <g opacity="0.1">
            <path fillRule="evenodd" clipRule="evenodd" d="M34.2202 6.6766C32.3638 5.60481 30.0766 5.60481 28.2202 6.6766L12.5217 15.7402C10.6652 16.8119 9.52166 18.7927 9.52166 20.9363V39.0634C9.52166 41.207 10.6652 43.1878 12.5217 44.2596L28.2202 53.3231C30.0766 54.3949 32.3638 54.3949 34.2202 53.3231L49.9187 44.2596C51.7751 43.1878 52.9187 41.207 52.9187 39.0634L52.9187 20.9363C52.9187 18.7927 51.7751 16.8119 49.9187 15.7402L34.2202 6.6766Z" fill="#F37E02" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M25.0203 17.6749C25.0203 19.2091 24.1429 20.608 22.7618 21.2759L20.8025 22.2235C18.1463 23.508 15.061 21.5729 15.061 18.6224V13.7797C15.061 13.0652 15.4422 12.405 16.061 12.0477L23.5203 7.74108C24.187 7.35618 25.0203 7.8373 25.0203 8.6071V17.6749Z" fill="url(#paint9_linear_62_595)"/>
            <path opacity="0.4" d="M16.2065 12.5398L23.7811 8.16748" stroke="#FDEDAC" strokeLinecap="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M36.9797 17.6749C36.9797 19.2091 37.8571 20.608 39.2382 21.2759L41.1975 22.2235C43.8537 23.508 46.939 21.5729 46.939 18.6224V13.7797C46.939 13.0652 46.5578 12.405 45.939 12.0477L38.4797 7.74108C37.813 7.35618 36.9797 7.8373 36.9797 8.6071V17.6749Z" fill="url(#paint10_linear_62_595)"/>
            <path opacity="0.4" d="M45.7935 12.5398L38.2189 8.16748" stroke="#FDEDAC" strokeLinecap="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M29 8.1547C30.2376 7.44017 31.7624 7.44017 33 8.1547L48.9186 17.3453C50.1562 18.0598 50.9186 19.3803 50.9186 20.8094V39.1906C50.9186 40.6197 50.1562 41.9402 48.9186 42.6547L33 51.8453C31.7624 52.5598 30.2376 52.5598 29 51.8453L13.0814 42.6547C11.8438 41.9402 11.0814 40.6197 11.0814 39.1906V20.8094C11.0814 19.3803 11.8438 18.0598 13.0814 17.3453L29 8.1547Z" fill="url(#paint11_linear_62_595)" stroke="#FFF04D" stopOpacity="0.4"/>
            <mask id="mask5_62_595" mask-type="luminance" maskUnits="userSpaceOnUse" x="11" y="7" width="40" height="46">
            <path fillRule="evenodd" clipRule="evenodd" d="M30 7.57735C30.6188 7.22008 31.3812 7.22008 32 7.57735L49.9186 17.9226C50.5374 18.2799 50.9186 18.9402 50.9186 19.6547V40.3453C50.9186 41.0598 50.5374 41.7201 49.9186 42.0774L32 52.4226C31.3812 52.7799 30.6188 52.7799 30 52.4226L12.0814 42.0774C11.4626 41.7201 11.0814 41.0598 11.0814 40.3453V19.6547C11.0814 18.9402 11.4626 18.2799 12.0814 17.9226L30 7.57735Z" fill="white"/>
            </mask>
            <g mask="url(#mask5_62_595)">
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.8" filter="url(#filter7_i_62_595)">
            <path fillRule="evenodd" clipRule="evenodd" d="M46.671 19.1886L32.5165 11.0069C31.5781 10.4645 30.4219 10.4645 29.4834 11.0069L15.329 19.1886C14.3906 19.7311 13.8125 20.7335 13.8125 21.8184V27.7208L12.665 29.444C12.4414 29.7797 12.4414 30.2169 12.665 30.5525L13.8125 32.2758V38.1818C13.8125 39.2667 14.3906 40.2691 15.329 40.8116L29.4834 48.9933C30.4219 49.5357 31.5781 49.5357 32.5165 48.9933L46.671 40.8116C47.6094 40.2691 48.1875 39.2667 48.1875 38.1818V32.2758L49.335 30.5525C49.5585 30.2169 49.5585 29.7797 49.335 29.444L48.1875 27.7208V21.8184C48.1875 20.7335 47.6094 19.7311 46.671 19.1886ZM14.8235 32.2758V38.1817C14.8235 38.905 15.2089 39.5733 15.8345 39.935L29.989 48.1166C30.6146 48.4783 31.3854 48.4783 32.011 48.1166L46.1655 39.935C46.7911 39.5733 47.1765 38.905 47.1765 38.1817V32.2758L46.029 30.5525C45.8055 30.2169 45.8055 29.7797 46.029 29.444L47.1765 27.7208V21.8184C47.1765 21.0951 46.7911 20.4268 46.1655 20.0652L32.011 11.8835C31.3854 11.5219 30.6146 11.5219 29.989 11.8835L15.8345 20.0652C15.2089 20.4268 14.8235 21.0951 14.8235 21.8184V27.7208L15.971 29.444C16.1945 29.7797 16.1945 30.2169 15.971 30.5525L14.8235 32.2758Z" fill="#FABC10"/>
            </g>
            <path d="M32.7501 8.58756C31.6672 7.96235 30.333 7.96235 29.2501 8.58756L13.3315 17.7782C12.2486 18.4034 11.5815 19.5588 11.5815 20.8093L11.5815 39.1904C11.5815 40.4409 12.2486 41.5963 13.3315 42.2215L29.2501 51.4121C30.333 52.0374 31.6672 52.0374 32.7501 51.4121L48.6687 42.2215C49.7516 41.5963 50.4187 40.4409 50.4187 39.1904V20.8093C50.4187 19.5588 49.7516 18.4034 48.6687 17.7782L32.7501 8.58756Z" stroke="#FAB90A"/>
            <path opacity="0.4" d="M32.75 51.4124C34.6222 50.3315 35.9487 49.5656 36.7296 49.1147" stroke="white" strokeLinecap="round"/>
            <path d="M50.4187 39.1905V20.8093C50.4187 19.5588 49.7516 18.4034 48.6687 17.7782L32.7501 8.58756C31.6672 7.96235 30.333 7.96235 29.2501 8.58756L13.3315 17.7782C12.2486 18.4034 11.5815 19.5588 11.5815 20.8093L11.5815 39.1905" stroke="#FAC81C" strokeLinecap="round"/>
            <path opacity="0.6" d="M50.4187 20.8093C50.4187 19.5588 49.7516 18.4034 48.6687 17.7782L32.7501 8.58756C31.6672 7.96235 30.333 7.96235 29.2501 8.58756L13.3315 17.7782C12.2486 18.4034 11.5815 19.5588 11.5815 20.8093" stroke="#FDDB3D" strokeLinecap="round"/>
            <path opacity="0.6" d="M32.7501 8.58756C31.6672 7.96235 30.333 7.96235 29.2501 8.58756C29.2501 8.58756 23.9439 11.6511 21.2908 13.1829" stroke="white" strokeLinecap="round"/>
            <path d="M29.2499 8.58789C29.2499 8.58789 26.4417 10.2092 25.2703 10.8855" stroke="white" strokeLinecap="round"/>
            </g>
            <g filter="url(#filter8_d_62_595)">
            <path fillRule="evenodd" clipRule="evenodd" d="M30 14.5774C30.6188 14.2201 31.3812 14.2201 32 14.5774L43.8564 21.4226C44.4752 21.7799 44.8564 22.4402 44.8564 23.1547V36.8453C44.8564 37.5598 44.4752 38.2201 43.8564 38.5774L32 45.4226C31.3812 45.7799 30.6188 45.7799 30 45.4226L18.1436 38.5774C17.5248 38.2201 17.1436 37.5598 17.1436 36.8453V23.1547C17.1436 22.4402 17.5248 21.7799 18.1436 21.4226L30 14.5774Z" fill="url(#paint12_linear_62_595)"/>
            <path d="M32.25 14.1443C31.4765 13.6978 30.5235 13.6978 29.75 14.1443L17.8936 20.9896C17.1201 21.4362 16.6436 22.2615 16.6436 23.1547V36.8453C16.6436 37.7385 17.1201 38.5638 17.8936 39.0104L29.75 45.8557C30.5235 46.3022 31.4765 46.3022 32.25 45.8557L44.1064 39.0104C44.8799 38.5638 45.3564 37.7385 45.3564 36.8453V23.1547C45.3564 22.2615 44.8799 21.4362 44.1064 20.9896L32.25 14.1443Z" stroke="#F5900D" stopOpacity="0.1" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            <mask id="mask6_62_595" mask-type="luminance" maskUnits="userSpaceOnUse" x="17" y="14" width="28" height="32">
            <path fillRule="evenodd" clipRule="evenodd" d="M30 14.5774C30.6188 14.2201 31.3812 14.2201 32 14.5774L43.8564 21.4226C44.4752 21.7799 44.8564 22.4402 44.8564 23.1547V36.8453C44.8564 37.5598 44.4752 38.2201 43.8564 38.5774L32 45.4226C31.3812 45.7799 30.6188 45.7799 30 45.4226L18.1436 38.5774C17.5248 38.2201 17.1436 37.5598 17.1436 36.8453V23.1547C17.1436 22.4402 17.5248 21.7799 18.1436 21.4226L30 14.5774Z" fill="white"/>
            </mask>
            <g mask="url(#mask6_62_595)">
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.3">
            <path fillRule="evenodd" clipRule="evenodd" d="M31 30L15 34V26L31 30ZM31 30L35 14H27L31 30ZM31 30L47 26V34L31 30ZM31 30L39.4853 15.8579L45.1421 21.5147L31 30ZM31 30L39.4853 44.1421L45.1421 38.4853L31 30ZM31 30L27 46H35L31 30ZM31 30L22.5147 44.1421L16.8579 38.4853L31 30Z" fill="#FFD640"/>
            <path d="M22.5147 15.8579L16.8579 21.5147L31 30L22.5147 15.8579Z" fill="#FFD640"/>
            </g>
            <path opacity="0.4" d="M43.6064 21.8558L31.75 15.0105C31.2859 14.7426 30.7141 14.7426 30.25 15.0105C28.8555 15.8156 27.8675 16.386 27.2859 16.7219C26.0754 17.4207 25.0873 17.9912 24.3218 18.4332C23.0044 19.1938 21.0283 20.3347 18.3936 21.8558" stroke="white" strokeLinecap="round"/>
            <path d="M30.25 15.0103C28.8556 15.8153 27.8675 16.3858 27.2859 16.7216" stroke="white" strokeLinecap="round"/>
            <path opacity="0.4" d="M43.6064 38.11L31.75 44.9553C31.2859 45.2232 30.7141 45.2232 30.25 44.9553" stroke="white" strokeLinecap="round"/>
            </g>
            <g filter="url(#filter9_d_62_595)">
            <path d="M24.7778 24.5575L31.0001 20.8335L37.2223 24.5575V35.4429L31.0001 39.1668L24.7778 35.4429V24.5575Z" fill="white"/>
            <path d="M24.2643 23.6994C23.9625 23.88 23.7778 24.2058 23.7778 24.5575V35.4429C23.7778 35.7945 23.9625 36.1203 24.2643 36.3009L30.4865 40.0249C30.8027 40.2141 31.1974 40.2141 31.5136 40.0249L37.7358 36.3009C38.0376 36.1203 38.2223 35.7945 38.2223 35.4429V24.5575C38.2223 24.2058 38.0376 23.88 37.7358 23.6994L31.5136 19.9754C31.1974 19.7862 30.8027 19.7862 30.4865 19.9754L24.2643 23.6994Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M24.7778 24.5575L31.0001 20.8335V24.8439L28.1718 26.5627L24.7778 24.5575Z" fill="url(#paint13_linear_62_595)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M24.7778 24.5576V35.443L28.1718 33.4378V26.5628L24.7778 24.5576Z" fill="url(#paint14_linear_62_595)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M31.0001 39.1667L24.7778 35.4427L28.1718 33.4375L31.0001 35.1562V39.1667Z" fill="url(#paint15_linear_62_595)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M31 39.1667L37.2222 35.4427L33.8283 33.4375L31 35.1562V39.1667Z" fill="url(#paint16_linear_62_595)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M37.2223 24.5576V35.443L33.8284 33.4378V26.5628L37.2223 24.5576Z" fill="url(#paint17_linear_62_595)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M37.2222 24.5575L31 20.8335V24.8439L33.8283 26.5627L37.2222 24.5575Z" fill="url(#paint18_linear_62_595)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M28.1719 33.4375L31.0002 35.1562L33.8284 33.4375V26.5625L31.0002 24.8438L28.1719 26.5625V33.4375Z" fill="url(#paint19_linear_62_595)"/>
            <g filter="url(#filter10_d_62_595)">
            <path fillRule="evenodd" clipRule="evenodd" d="M41.9109 23.7799L41.3916 23.5751C41.0739 23.4498 40.918 23.0908 41.0433 22.7732C41.1061 22.6138 41.2322 22.4877 41.3916 22.4249L41.9109 22.2201C42.5098 21.9839 42.9839 21.5098 43.2201 20.9109L43.4249 20.3916C43.5502 20.0739 43.9092 19.918 44.2268 20.0433C44.3862 20.1061 44.5123 20.2322 44.5751 20.3916L44.7799 20.9109C45.0161 21.5098 45.4902 21.9839 46.0891 22.2201L46.6084 22.4249C46.9261 22.5502 47.082 22.9092 46.9567 23.2268C46.8939 23.3862 46.7678 23.5123 46.6084 23.5751L46.0891 23.7799C45.4902 24.0161 45.0161 24.4902 44.7799 25.0891L44.5751 25.6084C44.4498 25.9261 44.0908 26.082 43.7732 25.9567C43.6138 25.8939 43.4877 25.7678 43.4249 25.6084L43.2201 25.0891C42.9839 24.4902 42.5098 24.0161 41.9109 23.7799Z" fill="white"/>
            </g>
            <g filter="url(#filter11_d_62_595)">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.6073 40.52L19.261 40.3834C19.0493 40.2999 18.9453 40.0605 19.0289 39.8488C19.0707 39.7426 19.1548 39.6585 19.261 39.6166L19.6073 39.48C20.0065 39.3226 20.3226 39.0065 20.48 38.6073L20.6166 38.261C20.7001 38.0493 20.9395 37.9453 21.1512 38.0289C21.2574 38.0707 21.3415 38.1548 21.3834 38.261L21.52 38.6073C21.6774 39.0065 21.9935 39.3226 22.3927 39.48L22.739 39.6166C22.9507 39.7001 23.0547 39.9395 22.9711 40.1512C22.9293 40.2574 22.8452 40.3415 22.739 40.3834L22.3927 40.52C21.9935 40.6774 21.6774 40.9935 21.52 41.3927L21.3834 41.739C21.2999 41.9507 21.0605 42.0547 20.8488 41.9711C20.7426 41.9293 20.6585 41.8452 20.6166 41.739L20.48 41.3927C20.3226 40.9935 20.0065 40.6774 19.6073 40.52Z" fill="white"/>
            </g>
            <g filter="url(#filter12_d_62_595)">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.7591 25.1499L15.3263 24.9793C15.0616 24.8749 14.9317 24.5757 15.0361 24.311C15.0884 24.1782 15.1935 24.0731 15.3263 24.0207L15.7591 23.8501C16.2582 23.6532 16.6532 23.2582 16.8501 22.7591L17.0207 22.3263C17.1251 22.0616 17.4243 21.9317 17.689 22.0361C17.8218 22.0884 17.9269 22.1935 17.9793 22.3263L18.1499 22.7591C18.3468 23.2582 18.7418 23.6532 19.2409 23.8501L19.6737 24.0207C19.9384 24.1251 20.0683 24.4243 19.9639 24.689C19.9116 24.8218 19.8065 24.9269 19.6737 24.9793L19.2409 25.1499C18.7418 25.3468 18.3468 25.7418 18.1499 26.2409L17.9793 26.6737C17.8749 26.9384 17.5757 27.0683 17.311 26.9639C17.1782 26.9116 17.0731 26.8065 17.0207 26.6737L16.8501 26.2409C16.6532 25.7418 16.2582 25.3468 15.7591 25.1499Z" fill="white"/>
            </g>
            <g filter="url(#filter13_d_62_595)">
            <path fillRule="evenodd" clipRule="evenodd" d="M41.4555 38.89L41.1958 38.7876C41.037 38.7249 40.959 38.5454 41.0216 38.3866C41.0531 38.3069 41.1161 38.2439 41.1958 38.2124L41.4555 38.11C41.7549 37.9919 41.9919 37.7549 42.11 37.4555L42.2124 37.1958C42.2751 37.037 42.4546 36.959 42.6134 37.0216C42.6931 37.0531 42.7561 37.1161 42.7876 37.1958L42.89 37.4555C43.0081 37.7549 43.2451 37.9919 43.5445 38.11L43.8042 38.2124C43.963 38.2751 44.041 38.4546 43.9784 38.6134C43.9469 38.6931 43.8839 38.7561 43.8042 38.7876L43.5445 38.89C43.2451 39.0081 43.0081 39.2451 42.89 39.5445L42.7876 39.8042C42.7249 39.963 42.5454 40.041 42.3866 39.9784C42.3069 39.9469 42.2439 39.8839 42.2124 39.8042L42.11 39.5445C41.9919 39.2451 41.7549 39.0081 41.4555 38.89Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d_62_595" x="15" y="27" width="20" height="35.3833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.921569 0 0 0 0 0.215686 0 0 0 0 0.305882 0 0 0 0.2 0"/>
            <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_595"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_595" result="shape"/>
            </filter>
            <filter id="filter1_d_62_595" x="27" y="27" width="20" height="35.3833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.921569 0 0 0 0 0.215686 0 0 0 0 0.305882 0 0 0 0.2 0"/>
            <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_595"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_595" result="shape"/>
            </filter>
            <filter id="filter2_d_62_595" x="21" y="32" width="20" height="35.3833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.921569 0 0 0 0 0.215686 0 0 0 0 0.305882 0 0 0 0.2 0"/>
            <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_595"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_595" result="shape"/>
            </filter>
            <filter id="filter3_i_62_595" x="2.5" y="18.5" width="12.0002" height="7.50049" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_595"/>
            </filter>
            <filter id="filter4_i_62_595" x="3.5" y="24.5" width="12.0002" height="7.50049" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_595"/>
            </filter>
            <filter id="filter5_i_62_595" x="47.5" y="18.5" width="12.0002" height="7.50049" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_595"/>
            </filter>
            <filter id="filter6_i_62_595" x="46.5" y="24.5" width="12.0002" height="7.50049" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_595"/>
            </filter>
            <filter id="filter7_i_62_595" x="12.4973" y="10.6001" width="37.0054" height="39.7998" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_595"/>
            </filter>
            <filter id="filter8_d_62_595" x="14.1436" y="12.3096" width="33.7129" height="37.3809" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.927721 0 0 0 0 0.665867 0 0 0 0 0.0535899 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_595"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_595" result="shape"/>
            </filter>
            <filter id="filter9_d_62_595" x="20.7778" y="17.8335" width="20.4443" height="26.3335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.733333 0 0 0 0 0.105882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_595"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_595" result="shape"/>
            </filter>
            <filter id="filter10_d_62_595" x="39" y="18" width="10" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_595"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_595" result="shape"/>
            </filter>
            <filter id="filter11_d_62_595" x="17" y="36" width="8" height="8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_595"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_595" result="shape"/>
            </filter>
            <filter id="filter12_d_62_595" x="13" y="20" width="9" height="9" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_595"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_595" result="shape"/>
            </filter>
            <filter id="filter13_d_62_595" x="39" y="35" width="7" height="7" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_595"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_595" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_62_595" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF7F7D"/>
            <stop offset="1" stopColor="#EC2E4A"/>
            </linearGradient>
            <linearGradient id="paint1_linear_62_595" x1="3" y1="13" x2="3" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7C71A"/>
            <stop offset="1" stopColor="#FBAA00"/>
            </linearGradient>
            <linearGradient id="paint2_linear_62_595" x1="3" y1="13" x2="3" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint3_linear_62_595" x1="59" y1="13" x2="59" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7C71A"/>
            <stop offset="1" stopColor="#FBAA00"/>
            </linearGradient>
            <linearGradient id="paint4_linear_62_595" x1="59" y1="13" x2="59" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint5_linear_62_595" x1="8" y1="36" x2="8" y2="45.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7C71A"/>
            <stop offset="1" stopColor="#FBAA00"/>
            </linearGradient>
            <linearGradient id="paint6_linear_62_595" x1="8" y1="36" x2="8" y2="45.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint7_linear_62_595" x1="54" y1="36" x2="54" y2="45.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7C71A"/>
            <stop offset="1" stopColor="#FBAA00"/>
            </linearGradient>
            <linearGradient id="paint8_linear_62_595" x1="54" y1="36" x2="54" y2="45.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint9_linear_62_595" x1="15.061" y1="7.60693" x2="15.061" y2="22.9387" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FBCC24"/>
            <stop offset="1" stopColor="#F9B800"/>
            </linearGradient>
            <linearGradient id="paint10_linear_62_595" x1="46.939" y1="7.60693" x2="46.939" y2="22.9387" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FBCC24"/>
            <stop offset="1" stopColor="#F9B800"/>
            </linearGradient>
            <linearGradient id="paint11_linear_62_595" x1="8" y1="7" x2="8" y2="53" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE046"/>
            <stop offset="1" stopColor="#F9B800"/>
            </linearGradient>
            <linearGradient id="paint12_linear_62_595" x1="15" y1="14" x2="15" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF550"/>
            <stop offset="1" stopColor="#FFD541"/>
            </linearGradient>
            <linearGradient id="paint13_linear_62_595" x1="31.47" y1="24.7864" x2="29.7761" y2="21.6092" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFD3D3"/>
            <stop offset="1" stopColor="#FF7E8A"/>
            </linearGradient>
            <linearGradient id="paint14_linear_62_595" x1="28.1718" y1="35.443" x2="28.1718" y2="24.5576" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF8B89"/>
            <stop offset="1" stopColor="#F34C5D"/>
            </linearGradient>
            <linearGradient id="paint15_linear_62_595" x1="29.4937" y1="37.9548" x2="30.86" y2="34.9107" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF7F7D"/>
            <stop offset="1" stopColor="#F21248"/>
            </linearGradient>
            <linearGradient id="paint16_linear_62_595" x1="37.2222" y1="39.1667" x2="37.2222" y2="33.4375" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF8B89"/>
            <stop offset="1" stopColor="#F34C5D"/>
            </linearGradient>
            <linearGradient id="paint17_linear_62_595" x1="37.2223" y1="35.443" x2="37.2223" y2="24.5576" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF8B89"/>
            <stop offset="1" stopColor="#F34C5D"/>
            </linearGradient>
            <linearGradient id="paint18_linear_62_595" x1="33.9222" y1="26.4882" x2="35.4562" y2="23.5171" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF7F7D"/>
            <stop offset="1" stopColor="#F21248"/>
            </linearGradient>
            <linearGradient id="paint19_linear_62_595" x1="33.8284" y1="35.1562" x2="33.8284" y2="24.8438" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF7F7D"/>
            <stop offset="1" stopColor="#F21248"/>
            </linearGradient>
            </defs>
            </svg>            
           }
           {
            level === "6" && <svg width="62" height="68" viewBox="0 0 62 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M48 56C49.1046 56 50 56.8954 50 58C50 59.1046 49.1046 60 48 60H30C29.8824 60 29.7673 59.9899 29.6553 59.9704C23.2305 59.687 17.3308 57.3828 12.5761 53.6779C12.1894 53.3766 11.6067 52.8771 11.1748 52.5013C10.8054 52.1799 10.3333 52 9.84362 52H5C3.89543 52 3 51.1046 3 50C3 48.8954 3.89543 48 5 48H7C8.10457 48 9 47.1046 9 46C9 44.8954 8.10457 44 7 44H2C0.89543 44 0 43.1046 0 42C0 40.8954 0.89543 40 2 40H3C4.10457 40 5 39.1046 5 38C5 36.8954 4.10457 36 3 36C2.1913 36 1.49962 35.4171 1.36506 34.6196C1.31617 34.3299 1.27734 34.0966 1.27093 34.0492C1.09227 32.7249 1 31.3732 1 30C1 13.4315 14.4315 0 31 0C36 0 41 0 46 0C47.1046 0 48 0.89543 48 2C48 3.10457 47.1046 4 46 4H43C41.8954 4 41 4.89543 41 6C41 7.10457 41.8954 8 43 8H55C56.1046 8 57 8.89543 57 10C57 11.1038 56.1058 11.9988 55.0022 12L52 12C50.8954 12 50 12.8954 50 14C50 15.1046 50.8954 16 52 16H56.306C57.0624 16 57.7556 16.4259 58.0835 17.1075C58.2807 17.5171 58.488 17.959 58.6237 18.2783C60.1536 21.8793 61 25.8408 61 30C61 31.3068 60.9164 32.5942 60.7544 33.8569C60.7271 34.0692 60.6853 34.3418 60.6398 34.6208C60.5093 35.4213 59.8111 36 59 36C57.8954 36 57 36.8954 57 38C57 39.1046 57.8954 40 59 40H60C61.1046 40 62 40.8954 62 42C62 43.1046 61.1046 44 60 44H58.7162C57.9901 44 57.3224 44.3942 56.9597 45.0232C56.7241 45.4317 56.4621 45.8761 56.2675 46.1794C55.8114 46.8903 55.326 47.5807 54.8132 48.2489C54.2981 48.9201 53.7553 49.5688 53.1864 50.1934C52.8743 50.5362 52.3685 51.044 51.974 51.4341C51.605 51.799 51.1061 52 50.5871 52H45C43.8954 52 43 52.8954 43 54C43 55.0969 43.883 55.9875 44.9769 55.9999L48 56Z" fill="url(#paint0_linear_62_670)"/>
            <g opacity="0.1">
            <path fillRule="evenodd" clipRule="evenodd" d="M27.9986 6.6766C29.855 5.60481 32.1422 5.60481 33.9986 6.6766L49.6971 15.7402C51.5535 16.8119 52.6971 18.7927 52.6971 20.9363V39.0634C52.6971 41.207 51.5535 43.1878 49.6971 44.2596L33.9986 53.3231C32.1422 54.3949 29.855 54.3949 27.9986 53.3231L12.3 44.2596C10.4436 43.1878 9.30005 41.207 9.30005 39.0634L9.30005 20.9363C9.30005 18.7927 10.4436 16.8119 12.3 15.7402L27.9986 6.6766Z" fill="black" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            <g filter="url(#filter0_d_62_670)">
            <path fillRule="evenodd" clipRule="evenodd" d="M15 27H31V57.382C31 58.1253 30.2177 58.6088 29.5528 58.2764L23 55L16.4472 58.2764C15.7823 58.6088 15 58.1253 15 57.382V27Z" fill="#7F45F6"/>
            </g>
            <g filter="url(#filter1_d_62_670)">
            <path fillRule="evenodd" clipRule="evenodd" d="M19 30H35V60.382C35 61.1253 34.2177 61.6088 33.5528 61.2764L27 58L20.4472 61.2764C19.7823 61.6088 19 61.1253 19 60.382V30Z" fill="#50E2C2"/>
            </g>
            <g filter="url(#filter2_d_62_670)">
            <path fillRule="evenodd" clipRule="evenodd" d="M31 27H47V57.382C47 58.1253 46.2177 58.6088 45.5528 58.2764L39 55L32.4472 58.2764C31.7823 58.6088 31 58.1253 31 57.382V27Z" fill="#7F45F6"/>
            </g>
            <g filter="url(#filter3_d_62_670)">
            <path fillRule="evenodd" clipRule="evenodd" d="M27 30H43V60.382C43 61.1253 42.2177 61.6088 41.5528 61.2764L35 58L28.4472 61.2764C27.7823 61.6088 27 61.1253 27 60.382V30Z" fill="#50E2C2"/>
            </g>
            <g filter="url(#filter4_d_62_670)">
            <path fillRule="evenodd" clipRule="evenodd" d="M23 32H39V62.382C39 63.1253 38.2177 63.6088 37.5528 63.2764L31 60L24.4472 63.2764C23.7823 63.6088 23 63.1253 23 62.382V32Z" fill="white"/>
            </g>
            <mask id="mask0_62_670" mask-type="luminance" maskUnits="userSpaceOnUse" x="23" y="32" width="16" height="32">
            <path fillRule="evenodd" clipRule="evenodd" d="M23 32H39V62.382C39 63.1253 38.2177 63.6088 37.5528 63.2764L31 60L24.4472 63.2764C23.7823 63.6088 23 63.1253 23 62.382V32Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_62_670)">
            <rect x="27" y="32" width="8" height="32" fill="#F55462"/>
            </g>
            <path style={{ mixBlendMode: 'multiply' }} opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M28.9999 11.656C30.2375 10.9415 31.7623 10.9415 32.9999 11.656L48.9185 20.8466C50.1561 21.5611 50.9185 22.8817 50.9185 24.3107V42.6919C50.9185 44.121 50.1561 45.4415 48.9185 46.156L32.9999 55.3466C31.7623 56.0611 30.2375 56.0611 28.9999 55.3466L13.0813 46.156C11.8437 45.4415 11.0813 44.121 11.0813 42.6919L11.0813 24.3107C11.0813 22.8817 11.8437 21.5611 13.0813 20.8466L28.9999 11.656Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M19.8164 33.1235L14.8164 31.1235V30.1235L9.8066 28.0361C9.37353 27.8556 8.91022 28.2197 8.98312 28.6831L9.68453 33.1425C9.73735 33.4783 9.95712 33.7643 10.268 33.9017L19.8164 38.1235V33.1235Z" fill="url(#paint1_linear_62_670)" stroke="url(#paint2_linear_62_670)" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M17.8164 28.1235L12.8164 26.1235V25.1235L7.8066 23.0361C7.37353 22.8556 6.91022 23.2197 6.98312 23.6831L7.68453 28.1425C7.73735 28.4783 7.95712 28.7643 8.26801 28.9017L17.8164 33.1235V28.1235Z" fill="url(#paint3_linear_62_670)" stroke="url(#paint4_linear_62_670)" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M15.8164 23.1235L10.8164 21.1235V20.1235L5.8066 18.0361C5.37353 17.8556 4.91022 18.2197 4.98312 18.6831L5.68453 23.1425C5.73735 23.4783 5.95712 23.7643 6.26801 23.9017L15.8164 28.1235V23.1235Z" fill="url(#paint5_linear_62_670)" stroke="url(#paint6_linear_62_670)" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.8164 18.1235L8.81641 16.1235V15.1235L3.80656 13.0361C3.37348 12.8557 2.91018 13.2197 2.98308 13.6832L3.68449 18.1426C3.7373 18.4783 3.95708 18.7643 4.26796 18.9018L13.8164 23.1235V18.1235Z" fill="url(#paint7_linear_62_670)" stroke="url(#paint8_linear_62_670)" strokeLinecap="round" strokeLinejoin="round"/>
            <mask id="mask1_62_670" mask-type="luminance" maskUnits="userSpaceOnUse" x="2" y="12" width="19" height="26">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.21037 20.1279C5.12506 19.5856 4.77011 19.1237 4.26801 18.9017C3.95712 18.7643 3.73735 18.4783 3.68453 18.1425L2.98312 13.6831C2.96589 13.5736 2.97934 13.4615 3.02198 13.3591C3.14943 13.0533 3.50072 12.9086 3.8066 13.0361L8.35847 14.9327C8.6358 15.0482 8.81645 15.3192 8.81645 15.6196C8.81645 15.9239 9.00172 16.1976 9.28427 16.3106L12.5592 17.6206C13.3185 17.9243 13.8164 18.6598 13.8164 19.4776V21.2465C13.8164 21.897 14.2125 22.4819 14.8164 22.7235C15.4204 22.9651 15.8164 23.55 15.8164 24.2005V26.2465C15.8164 26.897 16.2125 27.4819 16.8164 27.7235C17.4204 27.9651 17.8164 28.55 17.8164 29.2005V31.2465C17.8164 31.897 18.2125 32.4819 18.8164 32.7235C19.4204 32.9651 19.8164 33.55 19.8164 34.2005V35.0524C19.8164 36.4981 18.3299 37.4662 17.0077 36.8816L10.268 33.9017C9.95712 33.7643 9.73735 33.4783 9.68453 33.1425L9.21037 30.1279C9.12506 29.5856 8.77011 29.1237 8.26801 28.9017C7.95712 28.7643 7.73735 28.4783 7.68453 28.1425L7.21037 25.1279C7.12506 24.5856 6.77011 24.1237 6.26801 23.9017C5.95712 23.7643 5.73735 23.4783 5.68453 23.1425L5.21037 20.1279Z" fill="white" stroke="white"/>
            </mask>
            <g mask="url(#mask1_62_670)">
            <g opacity="0.1">
            <path fillRule="evenodd" clipRule="evenodd" d="M27.9983 6.6766C29.8547 5.60481 32.1419 5.60481 33.9983 6.6766L49.6968 15.7402C51.5533 16.8119 52.6968 18.7927 52.6968 20.9363V39.0634C52.6968 41.207 51.5533 43.1878 49.6968 44.2596L33.9983 53.3231C32.1419 54.3949 29.8547 54.3949 27.9983 53.3231L12.2998 44.2596C10.4434 43.1878 9.2998 41.207 9.2998 39.0634L9.2998 20.9363C9.2998 18.7927 10.4434 16.8119 12.2998 15.7402L27.9983 6.6766Z" fill="black" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M42.1833 33.1235L47.1833 31.1235V30.1235L52.1932 28.0361C52.6262 27.8556 53.0895 28.2197 53.0166 28.6831L52.3152 33.1425C52.2624 33.4783 52.0426 33.7643 51.7318 33.9017L42.1833 38.1235V33.1235Z" fill="url(#paint9_linear_62_670)" stroke="url(#paint10_linear_62_670)" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M44.1833 28.1235L49.1833 26.1235V25.1235L54.1932 23.0361C54.6262 22.8556 55.0895 23.2197 55.0166 23.6831L54.3152 28.1425C54.2624 28.4783 54.0426 28.7643 53.7318 28.9017L44.1833 33.1235V28.1235Z" fill="url(#paint11_linear_62_670)" stroke="url(#paint12_linear_62_670)" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M46.1833 23.1235L51.1833 21.1235V20.1235L56.1932 18.0361C56.6262 17.8556 57.0895 18.2197 57.0166 18.6831L56.3152 23.1425C56.2624 23.4783 56.0426 23.7643 55.7318 23.9017L46.1833 28.1235V23.1235Z" fill="url(#paint13_linear_62_670)" stroke="url(#paint14_linear_62_670)" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M48.1833 18.1235L53.1833 16.1235V15.1235L58.1932 13.0361C58.6262 12.8556 59.0895 13.2197 59.0166 13.6831L58.3152 18.1425C58.2624 18.4783 58.0426 18.7643 57.7318 18.9017L48.1833 23.1235V18.1235Z" fill="url(#paint15_linear_62_670)" stroke="url(#paint16_linear_62_670)" strokeLinecap="round" strokeLinejoin="round"/>
            <mask id="mask2_62_670" mask-type="luminance" maskUnits="userSpaceOnUse" x="41" y="12" width="19" height="26">
            <path fillRule="evenodd" clipRule="evenodd" d="M56.7894 20.1279C56.8747 19.5856 57.2296 19.1237 57.7318 18.9017C58.0426 18.7643 58.2624 18.4783 58.3152 18.1425L59.0166 13.6831C59.0339 13.5736 59.0204 13.4615 58.9778 13.3591C58.8503 13.0533 58.499 12.9086 58.1932 13.0361L53.6413 14.9327C53.364 15.0482 53.1833 15.3192 53.1833 15.6196C53.1833 15.9239 52.998 16.1976 52.7155 16.3106L49.4405 17.6206C48.6812 17.9243 48.1833 18.6598 48.1833 19.4776V21.2465C48.1833 21.897 47.7873 22.4819 47.1833 22.7235C46.5793 22.9651 46.1833 23.55 46.1833 24.2005V26.2465C46.1833 26.897 45.7873 27.4819 45.1833 27.7235C44.5793 27.9651 44.1833 28.55 44.1833 29.2005V31.2465C44.1833 31.897 43.7873 32.4819 43.1833 32.7235C42.5793 32.9651 42.1833 33.55 42.1833 34.2005V35.0524C42.1833 36.4981 43.6699 37.4662 44.9921 36.8816L51.7318 33.9017C52.0426 33.7643 52.2624 33.4783 52.3152 33.1425L52.7894 30.1279C52.8747 29.5856 53.2296 29.1237 53.7318 28.9017C54.0426 28.7643 54.2624 28.4783 54.3152 28.1425L54.7894 25.1279C54.8747 24.5856 55.2296 24.1237 55.7318 23.9017C56.0426 23.7643 56.2624 23.4783 56.3152 23.1425L56.7894 20.1279Z" fill="white" stroke="white"/>
            </mask>
            <g mask="url(#mask2_62_670)">
            <g opacity="0.1">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.9983 6.6766C32.1418 5.60481 29.8547 5.60481 27.9983 6.6766L12.2997 15.7402C10.4433 16.8119 9.29973 18.7927 9.29973 20.9363V39.0634C9.29973 41.207 10.4433 43.1878 12.2997 44.2596L27.9983 53.3231C29.8547 54.3949 32.1418 54.3949 33.9983 53.3231L49.6968 44.2596C51.5532 43.1878 52.6968 41.207 52.6968 39.0634L52.6968 20.9363C52.6968 18.7927 51.5532 16.8119 49.6968 15.7402L33.9983 6.6766Z" fill="black" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M12.9999 36L9.47386 37.763C9.1774 37.9112 8.97365 38.1967 8.92985 38.5253L8.16012 44.2982C8.09447 44.7906 8.62129 45.1449 9.05254 44.8985L14.9999 41.5L12.9999 36Z" fill="url(#paint17_linear_62_670)" stroke="url(#paint18_linear_62_670)" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M49 36L52.526 37.763C52.8225 37.9112 53.0262 38.1967 53.07 38.5253L53.8398 44.2982C53.9054 44.7906 53.3786 45.1449 52.9473 44.8985L47 41.5L49 36Z" fill="url(#paint19_linear_62_670)" stroke="url(#paint20_linear_62_670)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M39.23 10.0518C39.6779 10.3044 39.4986 10.9873 38.9844 10.9873H23.015C22.5004 10.9873 22.3214 10.3037 22.77 10.0515L30.7664 5.55572C30.9188 5.47006 31.1048 5.47018 31.257 5.55603L39.23 10.0518Z" fill="url(#paint21_linear_62_670)" stroke="url(#paint22_linear_62_670)" strokeLinecap="round" strokeLinejoin="round"/>
            <g filter="url(#filter5_i_62_670)">
            <path fillRule="evenodd" clipRule="evenodd" d="M48.9998 44.0304C48.9998 44.3877 48.8092 44.7178 48.4998 44.8965L33.9998 53.268C32.1434 54.3398 29.8562 54.3398 27.9998 53.268L13.4998 44.8965C13.1904 44.7178 12.9998 44.3877 12.9998 44.0304V40.1291C12.9998 39.3582 13.8351 38.8772 14.5018 39.2642L28.1886 47.2084C29.9269 48.2174 32.0726 48.2174 33.8109 47.2084L47.4978 39.2642C48.1644 38.8772 48.9998 39.3582 48.9998 40.1291V44.0304Z" fill="url(#paint23_linear_62_670)"/>
            </g>
            <path d="M48.4998 44.0304C48.4998 44.2091 48.4045 44.3741 48.2498 44.4635L33.7498 52.835C32.0481 53.8175 29.9515 53.8175 28.2498 52.835L13.7498 44.4635C13.5951 44.3741 13.4998 44.2091 13.4998 44.0304V40.1291C13.4998 39.7437 13.9174 39.5032 14.2508 39.6966L27.9376 47.6409C29.8311 48.7399 32.1684 48.7399 34.0619 47.6409L47.7488 39.6966C48.0821 39.5032 48.4998 39.7437 48.4998 40.1291V44.0304Z" stroke="url(#paint24_linear_62_670)" strokeLinecap="round" strokeLinejoin="round"/>
            <mask id="path-28-inside-1_62_670" fill="white">
            <path fillRule="evenodd" clipRule="evenodd" d="M27.0023 8.73651C27.0023 8.73794 27.0023 8.73936 27.0023 8.74079V12.4647C27.0023 12.5587 26.9891 12.651 26.9639 12.7392C26.9107 12.9255 26.8041 13.0935 26.6559 13.2215C26.6247 13.2485 26.5917 13.2736 26.5569 13.2968L26.5569 13.2968L19.1603 18.2268L16.5544 19.9637C15.8898 20.4067 14.9998 19.9303 14.9998 19.1316V14.5744C14.9998 14.2187 15.1887 13.8897 15.496 13.7105L22.6377 9.5454L25.1703 5.74736C25.7192 4.92421 27.0023 5.31278 27.0023 6.30213V8.73651Z"/>
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M27.0023 8.73651C27.0023 8.73794 27.0023 8.73936 27.0023 8.74079V12.4647C27.0023 12.5587 26.9891 12.651 26.9639 12.7392C26.9107 12.9255 26.8041 13.0935 26.6559 13.2215C26.6247 13.2485 26.5917 13.2736 26.5569 13.2968L26.5569 13.2968L19.1603 18.2268L16.5544 19.9637C15.8898 20.4067 14.9998 19.9303 14.9998 19.1316V14.5744C14.9998 14.2187 15.1887 13.8897 15.496 13.7105L22.6377 9.5454L25.1703 5.74736C25.7192 4.92421 27.0023 5.31278 27.0023 6.30213V8.73651Z" fill="url(#paint25_linear_62_670)"/>
            <path d="M27.0023 8.73651H26.0023L26.0023 8.74053L27.0023 8.73651ZM26.9639 12.7392L26.0023 12.4646L26.0023 12.4646L26.9639 12.7392ZM26.6559 13.2215L27.3095 13.9784L27.3095 13.9784L26.6559 13.2215ZM26.5569 13.2968L26.9577 14.213C27.0114 14.1895 27.0628 14.1614 27.1115 14.1289L26.5569 13.2968ZM26.5569 13.2968L26.1561 12.3806C26.1025 12.4041 26.051 12.4322 26.0023 12.4647L26.5569 13.2968ZM19.1603 18.2268L18.6057 17.3947H18.6057L19.1603 18.2268ZM16.5544 19.9637L17.109 20.7958H17.109L16.5544 19.9637ZM15.496 13.7105L14.9922 12.8467L14.9922 12.8467L15.496 13.7105ZM22.6377 9.5454L23.1415 10.4092C23.273 10.3325 23.3853 10.2268 23.4697 10.1002L22.6377 9.5454ZM25.1703 5.74736L26.0023 6.30214L26.0023 6.30214L25.1703 5.74736ZM26.0023 8.74053C26.0023 8.74061 26.0023 8.7407 26.0023 8.74079H28.0023C28.0023 8.73803 28.0023 8.73526 28.0023 8.7325L26.0023 8.74053ZM26.0023 8.74079V12.4647H28.0023V8.74079H26.0023ZM26.0023 12.4647L26.0023 12.4646L27.9255 13.0138C27.9759 12.8373 28.0023 12.6526 28.0023 12.4647H26.0023ZM26.0023 12.4646L26.0024 12.4646L27.3095 13.9784C27.6061 13.7223 27.8191 13.3862 27.9255 13.0138L26.0023 12.4646ZM26.0024 12.4646L26.0023 12.4647L27.1115 14.1289C27.181 14.0826 27.2471 14.0323 27.3095 13.9784L26.0024 12.4646ZM26.1561 12.3806L26.1561 12.3806L26.9577 14.213L26.9577 14.213L26.1561 12.3806ZM26.0023 12.4647L18.6057 17.3947L19.7149 19.059L27.1115 14.1289L26.0023 12.4647ZM18.6057 17.3947L15.9998 19.1316L17.109 20.7958L19.7149 19.059L18.6057 17.3947ZM15.9998 19.1316L15.9998 19.1316H13.9998C13.9998 20.7289 15.7799 21.6817 17.109 20.7958L15.9998 19.1316ZM15.9998 19.1316V14.5744H13.9998V19.1316H15.9998ZM15.9998 14.5744L15.9998 14.5744L14.9922 12.8467C14.3776 13.2051 13.9998 13.863 13.9998 14.5744H15.9998ZM15.9998 14.5744L23.1415 10.4092L22.1339 8.68157L14.9922 12.8467L15.9998 14.5744ZM23.4697 10.1002L26.0023 6.30214L24.3383 5.19257L21.8057 8.99062L23.4697 10.1002ZM26.0023 6.30214L26.0023 6.30213H28.0023C28.0023 4.32341 25.4361 3.5463 24.3383 5.19257L26.0023 6.30214ZM26.0023 6.30213V8.73651H28.0023V6.30213H26.0023Z" fill="url(#paint26_linear_62_670)" mask="url(#path-28-inside-1_62_670)"/>
            <mask id="path-30-inside-2_62_670" fill="white">
            <path fillRule="evenodd" clipRule="evenodd" d="M34.9998 8.73651C34.9998 8.73794 34.9998 8.73936 34.9998 8.74079V12.4647C34.9998 12.7991 35.1669 13.1113 35.4451 13.2968L35.4451 13.2968L42.8418 18.2268L45.4477 19.9637C46.1122 20.4067 47.0023 19.9303 47.0023 19.1316V14.5744C47.0023 14.2187 46.8134 13.8897 46.5061 13.7105L39.3643 9.5454L36.8318 5.74736C36.2829 4.92421 34.9998 5.31278 34.9998 6.30213V8.73651Z"/>
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M34.9998 8.73651C34.9998 8.73794 34.9998 8.73936 34.9998 8.74079V12.4647C34.9998 12.7991 35.1669 13.1113 35.4451 13.2968L35.4451 13.2968L42.8418 18.2268L45.4477 19.9637C46.1122 20.4067 47.0023 19.9303 47.0023 19.1316V14.5744C47.0023 14.2187 46.8134 13.8897 46.5061 13.7105L39.3643 9.5454L36.8318 5.74736C36.2829 4.92421 34.9998 5.31278 34.9998 6.30213V8.73651Z" fill="url(#paint27_linear_62_670)"/>
            <path d="M34.9998 8.73651L35.9998 8.74052V8.73651H34.9998ZM35.4451 13.2968L34.8905 14.1289C34.9508 14.1691 35.0152 14.2026 35.0827 14.2288L35.4451 13.2968ZM35.4451 13.2968L35.9998 12.4647C35.9395 12.4245 35.8751 12.391 35.8076 12.3648L35.4451 13.2968ZM42.8418 18.2268L43.3964 17.3947L43.3964 17.3947L42.8418 18.2268ZM45.4477 19.9637L44.8931 20.7958H44.8931L45.4477 19.9637ZM46.5061 13.7105L47.0099 12.8467L47.0099 12.8467L46.5061 13.7105ZM39.3643 9.5454L38.5323 10.1002C38.6168 10.2268 38.729 10.3325 38.8605 10.4092L39.3643 9.5454ZM36.8318 5.74736L37.6638 5.19257V5.19257L36.8318 5.74736ZM33.9998 8.7325C33.9998 8.73526 33.9998 8.73802 33.9998 8.74079H35.9998C35.9998 8.7407 35.9998 8.74061 35.9998 8.74052L33.9998 8.7325ZM33.9998 8.74079V12.4647H35.9998V8.74079H33.9998ZM33.9998 12.4647C33.9998 13.1335 34.334 13.758 34.8905 14.1289L35.9998 12.4647H35.9998H33.9998ZM35.0827 14.2288L35.0827 14.2288L35.8076 12.3648L35.8076 12.3648L35.0827 14.2288ZM34.8905 14.1289L42.2872 19.059L43.3964 17.3947L35.9998 12.4647L34.8905 14.1289ZM42.2872 19.059L44.8931 20.7958L46.0023 19.1316L43.3964 17.3947L42.2872 19.059ZM44.8931 20.7958C46.2222 21.6817 48.0023 20.7289 48.0023 19.1316H46.0023L46.0023 19.1316L44.8931 20.7958ZM48.0023 19.1316V14.5744H46.0023V19.1316H48.0023ZM48.0023 14.5744C48.0023 13.863 47.6244 13.2051 47.0099 12.8467L46.0023 14.5744L46.0023 14.5744H48.0023ZM47.0099 12.8467L39.8681 8.68157L38.8605 10.4092L46.0023 14.5744L47.0099 12.8467ZM40.1963 8.99062L37.6638 5.19257L35.9998 6.30214L38.5323 10.1002L40.1963 8.99062ZM37.6638 5.19257C36.566 3.5463 33.9998 4.32341 33.9998 6.30213H35.9998L35.9998 6.30214L37.6638 5.19257ZM33.9998 6.30213V8.73651H35.9998V6.30213H33.9998Z" fill="url(#paint28_linear_62_670)" mask="url(#path-30-inside-2_62_670)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M29 8.1547C30.2376 7.44017 31.7624 7.44017 33 8.1547L48.9186 17.3453C50.1562 18.0598 50.9186 19.3803 50.9186 20.8094V39.1906C50.9186 40.6197 50.1562 41.9402 48.9186 42.6547L33 51.8453C31.7624 52.5598 30.2376 52.5598 29 51.8453L13.0814 42.6547C11.8438 41.9402 11.0814 40.6197 11.0814 39.1906V20.8094C11.0814 19.3803 11.8438 18.0598 13.0814 17.3453L29 8.1547Z" fill="url(#paint29_linear_62_670)" stroke="#FFF04D" stopOpacity="0.4"/>
            <mask id="mask3_62_670" mask-type="luminance" maskUnits="userSpaceOnUse" x="11" y="7" width="40" height="46">
            <path fillRule="evenodd" clipRule="evenodd" d="M29 8.1547C30.2376 7.44017 31.7624 7.44017 33 8.1547L48.9186 17.3453C50.1562 18.0598 50.9186 19.3803 50.9186 20.8094V39.1906C50.9186 40.6197 50.1562 41.9402 48.9186 42.6547L33 51.8453C31.7624 52.5598 30.2376 52.5598 29 51.8453L13.0814 42.6547C11.8438 41.9402 11.0814 40.6197 11.0814 39.1906V20.8094C11.0814 19.3803 11.8438 18.0598 13.0814 17.3453L29 8.1547Z" fill="white"/>
            </mask>
            <g mask="url(#mask3_62_670)">
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.4">
            <path d="M31 29.9999L37 6H25L31 29.9999L18.2721 8.78679L9.78684 17.2721L31 29.9999L7 24V36L31 29.9999L9.78684 42.7279L18.2721 51.2132L31 29.9999L25 54H37L31 29.9999L43.7279 51.2132L52.2132 42.7279L31 29.9999L55 36V24L31 29.9999L52.2132 17.2721L43.7279 8.7868L31 29.9999Z" fill="#FFD640"/>
            </g>
            <g filter="url(#filter6_di_62_670)">
            <path fillRule="evenodd" clipRule="evenodd" d="M46.671 19.1886L32.5165 11.0069C31.5781 10.4645 30.4219 10.4645 29.4834 11.0069L15.329 19.1886C14.3905 19.7311 13.8124 20.7335 13.8124 21.8184V27.7208L12.665 29.444C12.4414 29.7797 12.4414 30.2169 12.665 30.5525L13.8124 32.2758V38.1818C13.8124 39.2667 14.3905 40.2691 15.329 40.8116L29.4834 48.9933C30.4219 49.5357 31.5781 49.5357 32.5165 48.9933L46.671 40.8116C47.6094 40.2691 48.1875 39.2667 48.1875 38.1818V32.2758L49.335 30.5525C49.5585 30.2169 49.5585 29.7797 49.335 29.444L48.1875 27.7208V21.8184C48.1875 20.7335 47.6094 19.7311 46.671 19.1886ZM14.8235 32.2758V38.1817C14.8235 38.905 15.2089 39.5733 15.8345 39.935L29.9889 48.1166C30.6146 48.4783 31.3854 48.4783 32.011 48.1166L46.1654 39.935C46.7911 39.5733 47.1765 38.905 47.1765 38.1817V32.2758L46.029 30.5525C45.8055 30.2169 45.8055 29.7797 46.029 29.444L47.1765 27.7208V21.8184C47.1765 21.0951 46.7911 20.4268 46.1654 20.0652L32.011 11.8835C31.3854 11.5219 30.6146 11.5219 29.9889 11.8835L15.8345 20.0652C15.2089 20.4268 14.8235 21.0951 14.8235 21.8184V27.7208L15.971 29.444C16.1945 29.7797 16.1945 30.2169 15.971 30.5525L14.8235 32.2758Z" fill="#676763"/>
            </g>
            <mask id="mask4_62_670" mask-type="luminance" maskUnits="userSpaceOnUse" x="12" y="10" width="38" height="40">
            <path fillRule="evenodd" clipRule="evenodd" d="M46.671 19.1886L32.5165 11.0069C31.5781 10.4645 30.4219 10.4645 29.4834 11.0069L15.329 19.1886C14.3905 19.7311 13.8124 20.7335 13.8124 21.8184V27.7208L12.665 29.444C12.4414 29.7797 12.4414 30.2169 12.665 30.5525L13.8124 32.2758V38.1818C13.8124 39.2667 14.3905 40.2691 15.329 40.8116L29.4834 48.9933C30.4219 49.5357 31.5781 49.5357 32.5165 48.9933L46.671 40.8116C47.6094 40.2691 48.1875 39.2667 48.1875 38.1818V32.2758L49.335 30.5525C49.5585 30.2169 49.5585 29.7797 49.335 29.444L48.1875 27.7208V21.8184C48.1875 20.7335 47.6094 19.7311 46.671 19.1886ZM14.8235 32.2758V38.1817C14.8235 38.905 15.2089 39.5733 15.8345 39.935L29.9889 48.1166C30.6146 48.4783 31.3854 48.4783 32.011 48.1166L46.1654 39.935C46.7911 39.5733 47.1765 38.905 47.1765 38.1817V32.2758L46.029 30.5525C45.8055 30.2169 45.8055 29.7797 46.029 29.444L47.1765 27.7208V21.8184C47.1765 21.0951 46.7911 20.4268 46.1654 20.0652L32.011 11.8835C31.3854 11.5219 30.6146 11.5219 29.9889 11.8835L15.8345 20.0652C15.2089 20.4268 14.8235 21.0951 14.8235 21.8184V27.7208L15.971 29.444C16.1945 29.7797 16.1945 30.2169 15.971 30.5525L14.8235 32.2758Z" fill="white"/>
            </mask>
            <g mask="url(#mask4_62_670)">
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.4">
            <path fillRule="evenodd" clipRule="evenodd" d="M31 30L7 24V36L31 30ZM31 30L37 6H25L31 30ZM31 30L55 36V24L31 30ZM31 30L43.7279 8.7868L52.2132 17.2721L31 30ZM31 30L52.2132 42.7279L43.7279 51.2132L31 30ZM31 30L18.2721 51.2132L9.7868 42.7279L31 30ZM31 30L37 54H25L31 30Z" fill="#5A5951"/>
            <path d="M18.2721 8.7868L9.7868 17.2721L31 30L18.2721 8.7868Z" fill="#5A5951"/>
            </g>
            </g>
            <path d="M32.7499 8.58756C31.667 7.96235 30.3328 7.96235 29.2499 8.58756L13.3313 17.7782C12.2484 18.4034 11.5813 19.5588 11.5813 20.8093L11.5813 39.1904C11.5813 40.4409 12.2484 41.5963 13.3313 42.2215L29.2499 51.4121C30.3328 52.0374 31.667 52.0374 32.7499 51.4121L48.6685 42.2215C49.7514 41.5963 50.4185 40.4409 50.4185 39.1904V20.8093C50.4185 19.5588 49.7514 18.4034 48.6685 17.7782L32.7499 8.58756Z" stroke="#FAB90A"/>
            <path opacity="0.4" d="M32.75 51.4124C34.6222 50.3315 35.9487 49.5656 36.7296 49.1147" stroke="white" strokeLinecap="round"/>
            <path d="M50.4185 39.1905V20.8093C50.4185 19.5588 49.7514 18.4034 48.6685 17.7782L32.7499 8.58756C31.667 7.96235 30.3328 7.96235 29.2499 8.58756L13.3313 17.7782C12.2484 18.4034 11.5813 19.5588 11.5813 20.8093L11.5813 39.1905" stroke="#FAC81C" strokeLinecap="round"/>
            <path opacity="0.6" d="M50.4185 20.8093C50.4185 19.5588 49.7514 18.4034 48.6685 17.7782L32.7499 8.58756C31.667 7.96235 30.3328 7.96235 29.2499 8.58756L13.3313 17.7782C12.2484 18.4034 11.5813 19.5588 11.5813 20.8093" stroke="#FFE56A" strokeLinecap="round"/>
            <path opacity="0.6" d="M32.7501 8.58756C31.6672 7.96235 30.333 7.96235 29.2501 8.58756C29.2501 8.58756 23.9439 11.6511 21.2908 13.1829" stroke="white" strokeLinecap="round"/>
            <path d="M29.2499 8.58789C29.2499 8.58789 26.4417 10.2092 25.2703 10.8855" stroke="white" strokeLinecap="round"/>
            </g>
            <g filter="url(#filter7_d_62_670)">
            <path fillRule="evenodd" clipRule="evenodd" d="M30 14.5774C30.6188 14.2201 31.3812 14.2201 32 14.5774L43.8564 21.4226C44.4752 21.7799 44.8564 22.4402 44.8564 23.1547V36.8453C44.8564 37.5598 44.4752 38.2201 43.8564 38.5774L32 45.4226C31.3812 45.7799 30.6188 45.7799 30 45.4226L18.1436 38.5774C17.5248 38.2201 17.1436 37.5598 17.1436 36.8453V23.1547C17.1436 22.4402 17.5248 21.7799 18.1436 21.4226L30 14.5774Z" fill="url(#paint30_linear_62_670)"/>
            <path d="M32.25 14.1443C31.4765 13.6978 30.5235 13.6978 29.75 14.1443L17.8936 20.9896C17.1201 21.4362 16.6436 22.2615 16.6436 23.1547V36.8453C16.6436 37.7385 17.1201 38.5638 17.8936 39.0104L29.75 45.8557C30.5235 46.3022 31.4765 46.3022 32.25 45.8557L44.1064 39.0104C44.8799 38.5638 45.3564 37.7385 45.3564 36.8453V23.1547C45.3564 22.2615 44.8799 21.4362 44.1064 20.9896L32.25 14.1443Z" stroke="#F5900D" stopOpacity="0.1" style={{ mixBlendMode: 'multiply' }}/>
            </g>
            <mask id="mask5_62_670" mask-type="luminance" maskUnits="userSpaceOnUse" x="17" y="14" width="28" height="32">
            <path fillRule="evenodd" clipRule="evenodd" d="M30 14.5774C30.6188 14.2201 31.3812 14.2201 32 14.5774L43.8564 21.4226C44.4752 21.7799 44.8564 22.4402 44.8564 23.1547V36.8453C44.8564 37.5598 44.4752 38.2201 43.8564 38.5774L32 45.4226C31.3812 45.7799 30.6188 45.7799 30 45.4226L18.1436 38.5774C17.5248 38.2201 17.1436 37.5598 17.1436 36.8453V23.1547C17.1436 22.4402 17.5248 21.7799 18.1436 21.4226L30 14.5774Z" fill="white"/>
            </mask>
            <g mask="url(#mask5_62_670)">
            <g style={{ mixBlendMode: 'multiply' }} opacity="0.3">
            <path fillRule="evenodd" clipRule="evenodd" d="M31 30L15 34V26L31 30ZM31 30L35 14H27L31 30ZM31 30L47 26V34L31 30ZM31 30L39.4853 15.8579L45.1421 21.5147L31 30ZM31 30L39.4853 44.1421L45.1421 38.4853L31 30ZM31 30L27 46H35L31 30ZM31 30L22.5147 44.1421L16.8579 38.4853L31 30Z" fill="#FFD640"/>
            <path d="M22.5147 15.8579L16.8579 21.5147L31 30L22.5147 15.8579Z" fill="#FFD640"/>
            </g>
            <path opacity="0.4" d="M43.6064 21.8558L31.75 15.0105C31.2859 14.7426 30.7141 14.7426 30.25 15.0105C28.8555 15.8156 27.8675 16.386 27.2859 16.7219C26.0754 17.4207 25.0873 17.9912 24.3218 18.4332C23.0044 19.1938 21.0283 20.3347 18.3936 21.8558" stroke="white" strokeLinecap="round"/>
            <path d="M30.25 15.0107C28.8556 15.8158 27.8675 16.3863 27.2859 16.7221" stroke="white" strokeLinecap="round"/>
            <path opacity="0.4" d="M43.6064 38.11L31.75 44.9553C31.2859 45.2232 30.7141 45.2232 30.25 44.9553" stroke="white" strokeLinecap="round"/>
            </g>
            <g filter="url(#filter8_d_62_670)">
            <mask id="path-51-outside-3_62_670" maskUnits="userSpaceOnUse" x="20" y="21.8037" width="22" height="19" fill="black">
            <rect fill="white" x="20" y="21.8037" width="22" height="19"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M22 28.9999L25 23.8037H37L40 28.9999H22ZM31 37.9999L40 28.9999H22L31 37.9999Z"/>
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M22 28.9999L25 23.8037H37L40 28.9999H22ZM31 37.9999L40 28.9999H22L31 37.9999Z" fill="white"/>
            <path d="M25 23.8037V21.8037C24.2855 21.8037 23.6252 22.1849 23.268 22.8037L25 23.8037ZM22 28.9999L20.268 27.9999C19.9107 28.6187 19.9107 29.3811 20.268 29.9999C20.6252 30.6187 21.2855 30.9999 22 30.9999V28.9999ZM37 23.8037L38.7321 22.8037C38.3748 22.1849 37.7145 21.8037 37 21.8037V23.8037ZM40 28.9999V30.9999C40.7145 30.9999 41.3748 30.6187 41.7321 29.9999C42.0893 29.3811 42.0893 28.6187 41.7321 27.9999L40 28.9999ZM40 28.9999L41.4142 30.4141C41.9862 29.8421 42.1573 28.9819 41.8478 28.2345C41.5382 27.4872 40.8089 26.9999 40 26.9999V28.9999ZM31 37.9999L29.5858 39.4141C29.9609 39.7892 30.4696 39.9999 31 39.9999C31.5304 39.9999 32.0391 39.7892 32.4142 39.4141L31 37.9999ZM22 28.9999V26.9999C21.1911 26.9999 20.4618 27.4872 20.1522 28.2345C19.8427 28.9819 20.0138 29.8421 20.5858 30.4141L22 28.9999ZM23.268 22.8037L20.268 27.9999L23.7321 29.9999L26.7321 24.8037L23.268 22.8037ZM37 21.8037H25V25.8037H37V21.8037ZM41.7321 27.9999L38.7321 22.8037L35.268 24.8037L38.268 29.9999L41.7321 27.9999ZM22 30.9999H40V26.9999H22V30.9999ZM38.5858 27.5857L29.5858 36.5857L32.4142 39.4141L41.4142 30.4141L38.5858 27.5857ZM22 30.9999H40V26.9999H22V30.9999ZM32.4142 36.5857L23.4142 27.5857L20.5858 30.4141L29.5858 39.4141L32.4142 36.5857Z" fill="white" mask="url(#path-51-outside-3_62_670)"/>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M31 38L40 29H22L31 38Z" fill="url(#paint31_linear_62_670)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M31 38L28 29H34L31 38Z" fill="url(#paint32_linear_62_670)"/>
            <path d="M25 23.8037L22 28.9999H40L37 23.8037H25Z" fill="url(#paint33_linear_62_670)"/>
            <path d="M25 23.8037L28 28.9999H22L25 23.8037Z" fill="url(#paint34_linear_62_670)"/>
            <path d="M31 23.8037L34 28.9999H28L31 23.8037Z" fill="url(#paint35_linear_62_670)"/>
            <path d="M37 23.8037L40 28.9999H34L37 23.8037Z" fill="url(#paint36_linear_62_670)"/>
            <g filter="url(#filter9_d_62_670)">
            <path fillRule="evenodd" clipRule="evenodd" d="M41.9109 23.7799L41.3916 23.5751C41.0739 23.4498 40.918 23.0908 41.0433 22.7732C41.1061 22.6138 41.2322 22.4877 41.3916 22.4249L41.9109 22.2201C42.5098 21.9839 42.9839 21.5098 43.2201 20.9109L43.4249 20.3916C43.5502 20.0739 43.9092 19.918 44.2268 20.0433C44.3862 20.1061 44.5123 20.2322 44.5751 20.3916L44.7799 20.9109C45.0161 21.5098 45.4902 21.9839 46.0891 22.2201L46.6084 22.4249C46.9261 22.5502 47.082 22.9092 46.9567 23.2268C46.8939 23.3862 46.7678 23.5123 46.6084 23.5751L46.0891 23.7799C45.4902 24.0161 45.0161 24.4902 44.7799 25.0891L44.5751 25.6084C44.4498 25.9261 44.0908 26.082 43.7732 25.9567C43.6138 25.8939 43.4877 25.7678 43.4249 25.6084L43.2201 25.0891C42.9839 24.4902 42.5098 24.0161 41.9109 23.7799Z" fill="white"/>
            </g>
            <g filter="url(#filter10_d_62_670)">
            <path fillRule="evenodd" clipRule="evenodd" d="M21.6073 39.52L21.261 39.3834C21.0493 39.2999 20.9453 39.0605 21.0289 38.8488C21.0707 38.7426 21.1548 38.6585 21.261 38.6166L21.6073 38.48C22.0065 38.3226 22.3226 38.0065 22.48 37.6073L22.6166 37.261C22.7001 37.0493 22.9395 36.9453 23.1512 37.0289C23.2574 37.0707 23.3415 37.1548 23.3834 37.261L23.52 37.6073C23.6774 38.0065 23.9935 38.3226 24.3927 38.48L24.739 38.6166C24.9507 38.7001 25.0547 38.9395 24.9711 39.1512C24.9293 39.2574 24.8452 39.3415 24.739 39.3834L24.3927 39.52C23.9935 39.6774 23.6774 39.9935 23.52 40.3927L23.3834 40.739C23.2999 40.9507 23.0605 41.0547 22.8488 40.9711C22.7426 40.9293 22.6585 40.8452 22.6166 40.739L22.48 40.3927C22.3226 39.9935 22.0065 39.6774 21.6073 39.52Z" fill="white"/>
            </g>
            <g filter="url(#filter11_d_62_670)">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.7591 25.1499L15.3263 24.9793C15.0616 24.8749 14.9317 24.5757 15.0361 24.311C15.0884 24.1782 15.1935 24.0731 15.3263 24.0207L15.7591 23.8501C16.2582 23.6532 16.6532 23.2582 16.8501 22.7591L17.0207 22.3263C17.1251 22.0616 17.4243 21.9317 17.689 22.0361C17.8218 22.0884 17.9269 22.1935 17.9793 22.3263L18.1499 22.7591C18.3468 23.2582 18.7418 23.6532 19.2409 23.8501L19.6737 24.0207C19.9384 24.1251 20.0683 24.4243 19.9639 24.689C19.9116 24.8218 19.8065 24.9269 19.6737 24.9793L19.2409 25.1499C18.7418 25.3468 18.3468 25.7418 18.1499 26.2409L17.9793 26.6737C17.8749 26.9384 17.5757 27.0683 17.311 26.9639C17.1782 26.9116 17.0731 26.8065 17.0207 26.6737L16.8501 26.2409C16.6532 25.7418 16.2582 25.3468 15.7591 25.1499Z" fill="white"/>
            </g>
            <g filter="url(#filter12_d_62_670)">
            <path fillRule="evenodd" clipRule="evenodd" d="M41.4555 39.89L41.1958 39.7876C41.037 39.7249 40.959 39.5454 41.0216 39.3866C41.0531 39.3069 41.1161 39.2439 41.1958 39.2124L41.4555 39.11C41.7549 38.9919 41.9919 38.7549 42.11 38.4555L42.2124 38.1958C42.2751 38.037 42.4546 37.959 42.6134 38.0216C42.6931 38.0531 42.7561 38.1161 42.7876 38.1958L42.89 38.4555C43.0081 38.7549 43.2451 38.9919 43.5445 39.11L43.8042 39.2124C43.963 39.2751 44.041 39.4546 43.9784 39.6134C43.9469 39.6931 43.8839 39.7561 43.8042 39.7876L43.5445 39.89C43.2451 40.0081 43.0081 40.2451 42.89 40.5445L42.7876 40.8042C42.7249 40.963 42.5454 41.041 42.3866 40.9784C42.3069 40.9469 42.2439 40.8839 42.2124 40.8042L42.11 40.5445C41.9919 40.2451 41.7549 40.0081 41.4555 39.89Z" fill="white"/>
            </g>
            <g filter="url(#filter13_d_62_670)">
            <path fillRule="evenodd" clipRule="evenodd" d="M37.3036 29.26L37.1305 29.1917C37.0246 29.1499 36.9727 29.0303 37.0144 28.9244C37.0354 28.8713 37.0774 28.8292 37.1305 28.8083L37.3036 28.74C37.5033 28.6613 37.6613 28.5033 37.74 28.3036L37.8083 28.1305C37.8501 28.0246 37.9697 27.9727 38.0756 28.0144C38.1287 28.0354 38.1708 28.0774 38.1917 28.1305L38.26 28.3036C38.3387 28.5033 38.4967 28.6613 38.6964 28.74L38.8695 28.8083C38.9754 28.8501 39.0273 28.9697 38.9856 29.0756C38.9646 29.1287 38.9226 29.1708 38.8695 29.1917L38.6964 29.26C38.4967 29.3387 38.3387 29.4967 38.26 29.6964L38.1917 29.8695C38.1499 29.9754 38.0303 30.0273 37.9244 29.9856C37.8713 29.9646 37.8292 29.9226 37.8083 29.8695L37.74 29.6964C37.6613 29.4967 37.5033 29.3387 37.3036 29.26Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d_62_670" x="13" y="27" width="20" height="35.3833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.61352 0 0 0 0 0.61352 0 0 0 0 0.61352 0 0 0 0.2 0"/>
            <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_670"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_670" result="shape"/>
            </filter>
            <filter id="filter1_d_62_670" x="17" y="30" width="20" height="35.3833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.61352 0 0 0 0 0.61352 0 0 0 0 0.61352 0 0 0 0.2 0"/>
            <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_670"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_670" result="shape"/>
            </filter>
            <filter id="filter2_d_62_670" x="29" y="27" width="20" height="35.3833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.61352 0 0 0 0 0.61352 0 0 0 0 0.61352 0 0 0 0.2 0"/>
            <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_670"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_670" result="shape"/>
            </filter>
            <filter id="filter3_d_62_670" x="25" y="30" width="20" height="35.3833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.61352 0 0 0 0 0.61352 0 0 0 0 0.61352 0 0 0 0.2 0"/>
            <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_670"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_670" result="shape"/>
            </filter>
            <filter id="filter4_d_62_670" x="21" y="32" width="20" height="35.3833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.61352 0 0 0 0 0.61352 0 0 0 0 0.61352 0 0 0 0.2 0"/>
            <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_62_670"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_670" result="shape"/>
            </filter>
            <filter id="filter5_i_62_670" x="12.9998" y="39.1274" width="36" height="15.9443" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.929412 0 0 0 0 0.568627 0 0 0 0 0 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_670"/>
            </filter>
            <filter id="filter6_di_62_670" x="11.4973" y="10.0001" width="39.0054" height="40.7998" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="0.4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.909804 0 0 0 0 0.556863 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_670"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_670" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.31048 0 0 0 0 0.31048 0 0 0 0 0.279572 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_62_670"/>
            </filter>
            <filter id="filter7_d_62_670" x="14.1436" y="12.3096" width="33.7129" height="37.3809" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.927721 0 0 0 0 0.665867 0 0 0 0 0.0535899 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_670"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_670" result="shape"/>
            </filter>
            <filter id="filter8_d_62_670" x="18" y="20.8037" width="26" height="22.1963" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.733333 0 0 0 0 0.105882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_670"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_670" result="shape"/>
            </filter>
            <filter id="filter9_d_62_670" x="39" y="18" width="10" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_670"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_670" result="shape"/>
            </filter>
            <filter id="filter10_d_62_670" x="19" y="35" width="8" height="8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_670"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_670" result="shape"/>
            </filter>
            <filter id="filter11_d_62_670" x="13" y="20" width="9" height="9" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_670"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_670" result="shape"/>
            </filter>
            <filter id="filter12_d_62_670" x="39" y="36" width="7" height="7" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_670"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_670" result="shape"/>
            </filter>
            <filter id="filter13_d_62_670" x="35" y="26" width="6" height="6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_670"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_670" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_62_670" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#575753"/>
            <stop offset="1" stopColor="#403F36"/>
            </linearGradient>
            <linearGradient id="paint1_linear_62_670" x1="1.00416" y1="13.086" x2="1.00416" y2="38.1235" gradientUnits="userSpaceOnUse">
            <stop stopColor="#75756F"/>
            <stop offset="1" stopColor="#3A342A"/>
            </linearGradient>
            <linearGradient id="paint2_linear_62_670" x1="8.97583" y1="27.9897" x2="8.97583" y2="38.1235" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint3_linear_62_670" x1="-1.03343" y1="12.9778" x2="-1.03343" y2="38.0855" gradientUnits="userSpaceOnUse">
            <stop stopColor="#75756F"/>
            <stop offset="1" stopColor="#3A342A"/>
            </linearGradient>
            <linearGradient id="paint4_linear_62_670" x1="6.97583" y1="22.9897" x2="6.97583" y2="33.1235" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint5_linear_62_670" x1="-3.09285" y1="12.9434" x2="-3.09285" y2="38.1623" gradientUnits="userSpaceOnUse">
            <stop stopColor="#75756F"/>
            <stop offset="1" stopColor="#3A342A"/>
            </linearGradient>
            <linearGradient id="paint6_linear_62_670" x1="4.97583" y1="17.9897" x2="4.97583" y2="28.1235" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint7_linear_62_670" x1="-5.06501" y1="12.9898" x2="-5.06501" y2="38.1566" gradientUnits="userSpaceOnUse">
            <stop stopColor="#75756F"/>
            <stop offset="1" stopColor="#3A342A"/>
            </linearGradient>
            <linearGradient id="paint8_linear_62_670" x1="2.97583" y1="12.9898" x2="2.97583" y2="23.1235" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint9_linear_62_670" x1="60.9956" y1="13.086" x2="60.9956" y2="38.1235" gradientUnits="userSpaceOnUse">
            <stop stopColor="#75756F"/>
            <stop offset="1" stopColor="#3A342A"/>
            </linearGradient>
            <linearGradient id="paint10_linear_62_670" x1="53.0239" y1="27.9897" x2="53.0239" y2="38.1235" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint11_linear_62_670" x1="63.0332" y1="12.9778" x2="63.0332" y2="38.0855" gradientUnits="userSpaceOnUse">
            <stop stopColor="#75756F"/>
            <stop offset="1" stopColor="#3A342A"/>
            </linearGradient>
            <linearGradient id="paint12_linear_62_670" x1="55.0239" y1="22.9897" x2="55.0239" y2="33.1235" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint13_linear_62_670" x1="65.0926" y1="12.9434" x2="65.0926" y2="38.1623" gradientUnits="userSpaceOnUse">
            <stop stopColor="#75756F"/>
            <stop offset="1" stopColor="#3A342A"/>
            </linearGradient>
            <linearGradient id="paint14_linear_62_670" x1="57.0239" y1="17.9897" x2="57.0239" y2="28.1235" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint15_linear_62_670" x1="67.0648" y1="12.9897" x2="67.0648" y2="38.1566" gradientUnits="userSpaceOnUse">
            <stop stopColor="#75756F"/>
            <stop offset="1" stopColor="#3A342A"/>
            </linearGradient>
            <linearGradient id="paint16_linear_62_670" x1="59.0239" y1="12.9897" x2="59.0239" y2="23.1235" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint17_linear_62_670" x1="8.15479" y1="36" x2="8.15479" y2="44.9775" gradientUnits="userSpaceOnUse">
            <stop stopColor="#75756F"/>
            <stop offset="1" stopColor="#3A342A"/>
            </linearGradient>
            <linearGradient id="paint18_linear_62_670" x1="8.15479" y1="36" x2="8.15479" y2="44.9775" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint19_linear_62_670" x1="54" y1="36" x2="54" y2="45.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#75756F"/>
            <stop offset="1" stopColor="#3A342A"/>
            </linearGradient>
            <linearGradient id="paint20_linear_62_670" x1="54" y1="36" x2="54" y2="45.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint21_linear_62_670" x1="21.9998" y1="5" x2="21.9998" y2="11.4873" gradientUnits="userSpaceOnUse">
            <stop stopColor="#75756F"/>
            <stop offset="1" stopColor="#3A342A"/>
            </linearGradient>
            <linearGradient id="paint22_linear_62_670" x1="21.9998" y1="5" x2="21.9998" y2="11.4873" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint23_linear_62_670" x1="12.9998" y1="39.1289" x2="12.9998" y2="54.0719" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F39C05"/>
            <stop offset="1" stopColor="#F59100"/>
            </linearGradient>
            <linearGradient id="paint24_linear_62_670" x1="12.9998" y1="39.1289" x2="12.9998" y2="54.0719" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFBA45"/>
            <stop offset="1" stopColor="#F59100"/>
            </linearGradient>
            <linearGradient id="paint25_linear_62_670" x1="14.9998" y1="5.30029" x2="14.9998" y2="20.1333" gradientUnits="userSpaceOnUse">
            <stop stopColor="#75756F"/>
            <stop offset="1" stopColor="#3A342A"/>
            </linearGradient>
            <linearGradient id="paint26_linear_62_670" x1="14.9998" y1="5.30029" x2="14.9998" y2="20.1333" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint27_linear_62_670" x1="34.9998" y1="5.30029" x2="34.9998" y2="20.1333" gradientUnits="userSpaceOnUse">
            <stop stopColor="#75756F"/>
            <stop offset="1" stopColor="#3A342A"/>
            </linearGradient>
            <linearGradient id="paint28_linear_62_670" x1="34.9998" y1="5.30029" x2="34.9998" y2="20.1333" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDF6B"/>
            <stop offset="1" stopColor="#F8A60A"/>
            </linearGradient>
            <linearGradient id="paint29_linear_62_670" x1="8" y1="7" x2="8" y2="53" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE046"/>
            <stop offset="1" stopColor="#F9B800"/>
            </linearGradient>
            <linearGradient id="paint30_linear_62_670" x1="15" y1="14" x2="15" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF550"/>
            <stop offset="1" stopColor="#FFD541"/>
            </linearGradient>
            <linearGradient id="paint31_linear_62_670" x1="31" y1="38" x2="31" y2="29" gradientUnits="userSpaceOnUse">
            <stop stopColor="#878787"/>
            <stop offset="1" stopColor="#1F1F1F"/>
            </linearGradient>
            <linearGradient id="paint32_linear_62_670" x1="34" y1="38" x2="34" y2="29" gradientUnits="userSpaceOnUse">
            <stop stopColor="#878787"/>
            <stop offset="1" stopColor="#4E4E4E"/>
            </linearGradient>
            <linearGradient id="paint33_linear_62_670" x1="40" y1="28.9999" x2="40" y2="23.8037" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="#A8A8A8"/>
            </linearGradient>
            <linearGradient id="paint34_linear_62_670" x1="24" y1="28.9999" x2="24" y2="24.6697" gradientUnits="userSpaceOnUse">
            <stop stopColor="#818181"/>
            <stop offset="1" stopColor="#A0A0A0"/>
            </linearGradient>
            <linearGradient id="paint35_linear_62_670" x1="30" y1="28.9999" x2="30" y2="24.6697" gradientUnits="userSpaceOnUse">
            <stop stopColor="#818181"/>
            <stop offset="1" stopColor="#A0A0A0"/>
            </linearGradient>
            <linearGradient id="paint36_linear_62_670" x1="36" y1="28.9999" x2="36" y2="24.6697" gradientUnits="userSpaceOnUse">
            <stop stopColor="#818181"/>
            <stop offset="1" stopColor="#A0A0A0"/>
            </linearGradient>
            </defs>
            </svg>
           }
           </>
        )
    }
    else{
        return (
            <>
            {level === "0" && <svg width="62" height="64" viewBox="0 0 62 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g style={{ mixBlendMode: 'screen' }}opacity="0.24">
<path fillRule="evenodd" clipRule="evenodd" d="M48 56C49.1046 56 50 56.8954 50 58C50 59.1046 49.1046 60 48 60H30C29.8824 60 29.7673 59.9899 29.6553 59.9704C23.2305 59.687 17.3308 57.3828 12.5761 53.6779C12.1894 53.3766 11.6067 52.8771 11.1748 52.5013C10.8054 52.1799 10.3333 52 9.84362 52H5C3.89543 52 3 51.1046 3 50C3 48.8954 3.89543 48 5 48H7C8.10457 48 9 47.1046 9 46C9 44.8954 8.10457 44 7 44H2C0.89543 44 0 43.1046 0 42C0 40.8954 0.89543 40 2 40H3C4.10457 40 5 39.1046 5 38C5 36.8954 4.10457 36 3 36C2.1913 36 1.49962 35.4171 1.36506 34.6196C1.31617 34.3299 1.27734 34.0966 1.27093 34.0492C1.09227 32.7249 1 31.3732 1 30C1 13.4315 14.4315 0 31 0C36 0 41 0 46 0C47.1046 0 48 0.89543 48 2C48 3.10457 47.1046 4 46 4H43C41.8954 4 41 4.89543 41 6C41 7.10457 41.8954 8 43 8H55C56.1046 8 57 8.89543 57 10C57 11.1038 56.1058 11.9988 55.0022 12L52 12C50.8954 12 50 12.8954 50 14C50 15.1046 50.8954 16 52 16H56.306C57.0624 16 57.7556 16.4259 58.0835 17.1075C58.2807 17.5171 58.488 17.959 58.6237 18.2783C60.1536 21.8793 61 25.8408 61 30C61 31.3068 60.9164 32.5942 60.7544 33.8569C60.7271 34.0692 60.6853 34.3418 60.6398 34.6208C60.5093 35.4213 59.8111 36 59 36C57.8954 36 57 36.8954 57 38C57 39.1046 57.8954 40 59 40H60C61.1046 40 62 40.8954 62 42C62 43.1046 61.1046 44 60 44H58.7162C57.9901 44 57.3224 44.3942 56.9597 45.0232C56.7241 45.4317 56.4621 45.8761 56.2675 46.1794C55.8114 46.8903 55.326 47.5807 54.8132 48.2489C54.2981 48.9201 53.7553 49.5688 53.1864 50.1934C52.8743 50.5362 52.3685 51.044 51.974 51.4341C51.605 51.799 51.1061 52 50.5871 52H45C43.8954 52 43 52.8954 43 54C43 55.0969 43.883 55.9875 44.9769 55.9999L48 56Z" fill="white"/>
</g>
<path fillRule="evenodd" clipRule="evenodd" d="M23 30H39V62.3364C39 63.0906 38.1969 63.5734 37.5308 63.2195L31 59.75L24.4692 63.2195C23.8031 63.5734 23 63.0906 23 62.3364V30Z" fill="#A1C7FF"/>
<mask id="mask0_63_251" mask-type="luminance" maskUnits="userSpaceOnUse" x="23" y="30" width="16" height="34">
<path fillRule="evenodd" clipRule="evenodd" d="M23 30H39V62.3364C39 63.0906 38.1969 63.5734 37.5308 63.2195L31 59.75L24.4692 63.2195C23.8031 63.5734 23 63.0906 23 62.3364V30Z" fill="white"/>
</mask>
<g mask="url(#mask0_63_251)">
<path fillRule="evenodd" clipRule="evenodd" d="M27 46H35V64H27V46Z" fill="#E7F1FF"/>
</g>
<path fillRule="evenodd" clipRule="evenodd" d="M28.6489 8.7082C30.0508 7.68963 31.9492 7.68963 33.3511 8.7082L50.5232 21.1844C51.9251 22.203 52.5117 24.0085 51.9762 25.6565L45.4171 45.8435C44.8816 47.4916 43.3458 48.6074 41.6129 48.6074H20.3871C18.6542 48.6074 17.1184 47.4916 16.5829 45.8435L10.0238 25.6565C9.48826 24.0084 10.0749 22.203 11.4768 21.1844L28.6489 8.7082Z" fill="#B6D5FF"/>
<path fillRule="evenodd" clipRule="evenodd" d="M29.8244 14.8541C30.5254 14.3448 31.4746 14.3448 32.1756 14.8541L45.0413 24.2016C45.7423 24.7109 46.0356 25.6136 45.7679 26.4377L40.8536 41.5623C40.5858 42.3864 39.8179 42.9443 38.9515 42.9443H23.0485C22.1821 42.9443 21.4142 42.3864 21.1464 41.5623L16.2321 26.4377C15.9644 25.6136 16.2577 24.7109 16.9587 24.2016L29.8244 14.8541Z" fill="#D6E7FF"/>
<path fillRule="evenodd" clipRule="evenodd" d="M31 35.4L27.0847 36.7923C26.4227 37.0277 25.7307 36.5249 25.75 35.8226L25.8643 31.6687L23.3303 28.3753C22.9018 27.8184 23.1661 27.0049 23.8401 26.8063L27.826 25.6313L30.1751 22.2036C30.5723 21.624 31.4277 21.624 31.8249 22.2036L34.174 25.6313L38.1599 26.8063C38.8339 27.0049 39.0982 27.8184 38.6697 28.3753L36.1357 31.6687L36.25 35.8226C36.2693 36.5249 35.5773 37.0277 34.9153 36.7923L31 35.4Z" fill="#A1C7FF" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            } 
            {
                level === "1" && <svg width="62" height="64" viewBox="0 0 62 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style={{ mixBlendMode: 'screen' }}opacity="0.24">
                <path fillRule="evenodd" clipRule="evenodd" d="M48 56C49.1046 56 50 56.8954 50 58C50 59.1046 49.1046 60 48 60H30C29.8824 60 29.7673 59.9899 29.6553 59.9704C23.2305 59.687 17.3308 57.3828 12.5761 53.6779C12.1894 53.3766 11.6067 52.8771 11.1748 52.5013C10.8054 52.1799 10.3333 52 9.84362 52H5C3.89543 52 3 51.1046 3 50C3 48.8954 3.89543 48 5 48H7C8.10457 48 9 47.1046 9 46C9 44.8954 8.10457 44 7 44H2C0.89543 44 0 43.1046 0 42C0 40.8954 0.89543 40 2 40H3C4.10457 40 5 39.1046 5 38C5 36.8954 4.10457 36 3 36C2.1913 36 1.49962 35.4171 1.36506 34.6196C1.31617 34.3299 1.27734 34.0966 1.27093 34.0492C1.09227 32.7249 1 31.3732 1 30C1 13.4315 14.4315 0 31 0C36 0 41 0 46 0C47.1046 0 48 0.89543 48 2C48 3.10457 47.1046 4 46 4H43C41.8954 4 41 4.89543 41 6C41 7.10457 41.8954 8 43 8H55C56.1046 8 57 8.89543 57 10C57 11.1038 56.1058 11.9988 55.0022 12L52 12C50.8954 12 50 12.8954 50 14C50 15.1046 50.8954 16 52 16H56.306C57.0624 16 57.7556 16.4259 58.0835 17.1075C58.2807 17.5171 58.488 17.959 58.6237 18.2783C60.1536 21.8793 61 25.8408 61 30C61 31.3068 60.9164 32.5942 60.7544 33.8569C60.7271 34.0692 60.6853 34.3418 60.6398 34.6208C60.5093 35.4213 59.8111 36 59 36C57.8954 36 57 36.8954 57 38C57 39.1046 57.8954 40 59 40H60C61.1046 40 62 40.8954 62 42C62 43.1046 61.1046 44 60 44H58.7162C57.9901 44 57.3224 44.3942 56.9597 45.0232C56.7241 45.4317 56.4621 45.8761 56.2675 46.1794C55.8114 46.8903 55.326 47.5807 54.8132 48.2489C54.2981 48.9201 53.7553 49.5688 53.1864 50.1934C52.8743 50.5362 52.3685 51.044 51.974 51.4341C51.605 51.799 51.1061 52 50.5871 52H45C43.8954 52 43 52.8954 43 54C43 55.0969 43.883 55.9875 44.9769 55.9999L48 56Z" fill="white"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M23 30H39V62.3364C39 63.0906 38.1969 63.5734 37.5308 63.2195L31 59.75L24.4692 63.2195C23.8031 63.5734 23 63.0906 23 62.3364V30Z" fill="#A1C7FF"/>
                <mask id="mask0_63_262" mask-type="luminance" maskUnits="userSpaceOnUse" x="23" y="30" width="16" height="34">
                <path fillRule="evenodd" clipRule="evenodd" d="M23 30H39V62.3364C39 63.0906 38.1969 63.5734 37.5308 63.2195L31 59.75L24.4692 63.2195C23.8031 63.5734 23 63.0906 23 62.3364V30Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_63_262)">
                <path fillRule="evenodd" clipRule="evenodd" d="M27 46H35V64H27V46Z" fill="#E7F1FF"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M28.6489 8.7082C30.0508 7.68963 31.9492 7.68963 33.3511 8.7082L50.5232 21.1844C51.9251 22.203 52.5117 24.0085 51.9762 25.6565L45.4171 45.8435C44.8816 47.4916 43.3458 48.6074 41.6129 48.6074H20.3871C18.6542 48.6074 17.1184 47.4916 16.5829 45.8435L10.0238 25.6565C9.48826 24.0084 10.0749 22.203 11.4768 21.1844L28.6489 8.7082Z" fill="#B6D5FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M29.8244 14.8541C30.5254 14.3448 31.4746 14.3448 32.1756 14.8541L45.0413 24.2016C45.7423 24.7109 46.0356 25.6136 45.7679 26.4377L40.8536 41.5623C40.5858 42.3864 39.8179 42.9443 38.9515 42.9443H23.0485C22.1821 42.9443 21.4142 42.3864 21.1464 41.5623L16.2321 26.4377C15.9644 25.6136 16.2577 24.7109 16.9587 24.2016L29.8244 14.8541Z" fill="#D6E7FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M31 35.4L27.0847 36.7923C26.4227 37.0277 25.7307 36.5249 25.75 35.8226L25.8643 31.6687L23.3303 28.3753C22.9018 27.8184 23.1661 27.0049 23.8401 26.8063L27.826 25.6313L30.1751 22.2036C30.5723 21.624 31.4277 21.624 31.8249 22.2036L34.174 25.6313L38.1599 26.8063C38.8339 27.0049 39.0982 27.8184 38.6697 28.3753L36.1357 31.6687L36.25 35.8226C36.2693 36.5249 35.5773 37.0277 34.9153 36.7923L31 35.4Z" fill="#A1C7FF" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <mask id="mask1_63_262" mask-type="luminance" maskUnits="userSpaceOnUse" x="22" y="20" width="18" height="18">
                <path fillRule="evenodd" clipRule="evenodd" d="M31 35.4L27.0847 36.7923C26.4227 37.0277 25.7307 36.5249 25.75 35.8226L25.8643 31.6687L23.3303 28.3753C22.9018 27.8184 23.1661 27.0049 23.8401 26.8063L27.826 25.6313L30.1751 22.2036C30.5723 21.624 31.4277 21.624 31.8249 22.2036L34.174 25.6313L38.1599 26.8063C38.8339 27.0049 39.0982 27.8184 38.6697 28.3753L36.1357 31.6687L36.25 35.8226C36.2693 36.5249 35.5773 37.0277 34.9153 36.7923L31 35.4Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </mask>
                <g mask="url(#mask1_63_262)">
                </g>
                </svg>
                
            }
            {
                level === "2" && <svg width="62" height="64" viewBox="0 0 62 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style={{ mixBlendMode: 'screen' }}opacity="0.24">
                <path fillRule="evenodd" clipRule="evenodd" d="M48 56C49.1046 56 50 56.8954 50 58C50 59.1046 49.1046 60 48 60H30C29.8824 60 29.7673 59.9899 29.6553 59.9704C23.2305 59.687 17.3308 57.3828 12.5761 53.6779C12.1894 53.3766 11.6067 52.8771 11.1748 52.5013C10.8054 52.1799 10.3333 52 9.84362 52H5C3.89543 52 3 51.1046 3 50C3 48.8954 3.89543 48 5 48H7C8.10457 48 9 47.1046 9 46C9 44.8954 8.10457 44 7 44H2C0.89543 44 0 43.1046 0 42C0 40.8954 0.89543 40 2 40H3C4.10457 40 5 39.1046 5 38C5 36.8954 4.10457 36 3 36C2.1913 36 1.49962 35.4171 1.36506 34.6196C1.31617 34.3299 1.27734 34.0966 1.27093 34.0492C1.09227 32.7249 1 31.3732 1 30C1 13.4315 14.4315 0 31 0C36 0 41 0 46 0C47.1046 0 48 0.89543 48 2C48 3.10457 47.1046 4 46 4H43C41.8954 4 41 4.89543 41 6C41 7.10457 41.8954 8 43 8H55C56.1046 8 57 8.89543 57 10C57 11.1038 56.1058 11.9988 55.0022 12L52 12C50.8954 12 50 12.8954 50 14C50 15.1046 50.8954 16 52 16H56.306C57.0624 16 57.7556 16.4259 58.0835 17.1075C58.2807 17.5171 58.488 17.959 58.6237 18.2783C60.1536 21.8793 61 25.8408 61 30C61 31.3068 60.9164 32.5942 60.7544 33.8569C60.7271 34.0692 60.6853 34.3418 60.6398 34.6208C60.5093 35.4213 59.8111 36 59 36C57.8954 36 57 36.8954 57 38C57 39.1046 57.8954 40 59 40H60C61.1046 40 62 40.8954 62 42C62 43.1046 61.1046 44 60 44H58.7162C57.9901 44 57.3224 44.3942 56.9597 45.0232C56.7241 45.4317 56.4621 45.8761 56.2675 46.1794C55.8114 46.8903 55.326 47.5807 54.8132 48.2489C54.2981 48.9201 53.7553 49.5688 53.1864 50.1934C52.8743 50.5362 52.3685 51.044 51.974 51.4341C51.605 51.799 51.1061 52 50.5871 52H45C43.8954 52 43 52.8954 43 54C43 55.0969 43.883 55.9875 44.9769 55.9999L48 56Z" fill="white"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M24.0718 26L37.9282 34L21.76 62.0041C21.3829 62.6573 20.446 62.6738 20.0461 62.0344L16.125 55.7643L8.73435 55.5035C7.98061 55.4769 7.52648 54.6573 7.90358 54.0041L24.0718 26Z" fill="#A1C7FF"/>
                <mask id="mask0_63_274" mask-type="luminance" maskUnits="userSpaceOnUse" x="7" y="26" width="31" height="37">
                <path fillRule="evenodd" clipRule="evenodd" d="M24.0718 26L37.9282 34L21.76 62.0041C21.3829 62.6573 20.446 62.6738 20.0461 62.0344L16.125 55.7643L8.73435 55.5035C7.98061 55.4769 7.52648 54.6573 7.90358 54.0041L24.0718 26Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_63_274)">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.5359 41.8564L26.4641 45.8564L17.4641 61.4449L10.5359 57.4449L19.5359 41.8564Z" fill="#E7F1FF"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M37.9282 26L24.0718 34L40.24 62.0041C40.6171 62.6573 41.554 62.6738 41.9539 62.0344L45.875 55.7643L53.2657 55.5035C54.0194 55.4769 54.4735 54.6573 54.0964 54.0041L37.9282 26Z" fill="#A1C7FF"/>
                <mask id="mask1_63_274" mask-type="luminance" maskUnits="userSpaceOnUse" x="24" y="26" width="31" height="37">
                <path fillRule="evenodd" clipRule="evenodd" d="M37.9282 26L24.0718 34L40.24 62.0041C40.6171 62.6573 41.554 62.6738 41.9539 62.0344L45.875 55.7643L53.2657 55.5035C54.0194 55.4769 54.4735 54.6573 54.0964 54.0041L37.9282 26Z" fill="white"/>
                </mask>
                <g mask="url(#mask1_63_274)">
                <path fillRule="evenodd" clipRule="evenodd" d="M42.4641 41.8564L35.5359 45.8564L44.5359 61.4449L51.4641 57.4449L42.4641 41.8564Z" fill="#E7F1FF"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M29 8.1547C30.2376 7.44017 31.7624 7.44017 33 8.1547L48.9186 17.3453C50.1562 18.0598 50.9186 19.3803 50.9186 20.8094V39.1906C50.9186 40.6197 50.1562 41.9402 48.9186 42.6547L33 51.8453C31.7624 52.5598 30.2376 52.5598 29 51.8453L13.0814 42.6547C11.8438 41.9402 11.0814 40.6197 11.0814 39.1906V20.8094C11.0814 19.3803 11.8438 18.0598 13.0814 17.3453L29 8.1547Z" fill="#B6D5FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M30 14.5774C30.6188 14.2201 31.3812 14.2201 32 14.5774L43.8564 21.4226C44.4752 21.7799 44.8564 22.4402 44.8564 23.1547V36.8453C44.8564 37.5598 44.4752 38.2201 43.8564 38.5774L32 45.4226C31.3812 45.7799 30.6188 45.7799 30 45.4226L18.1436 38.5774C17.5248 38.2201 17.1436 37.5598 17.1436 36.8453V23.1547C17.1436 22.4402 17.5248 21.7799 18.1436 21.4226L30 14.5774Z" fill="#D6E7FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M31 35.4L27.0847 36.7923C26.4227 37.0277 25.7307 36.5249 25.75 35.8226L25.8643 31.6687L23.3303 28.3753C22.9018 27.8184 23.1661 27.0049 23.8401 26.8063L27.826 25.6313L30.1751 22.2036C30.5723 21.624 31.4277 21.624 31.8249 22.2036L34.174 25.6313L38.1599 26.8063C38.8339 27.0049 39.0982 27.8184 38.6697 28.3753L36.1357 31.6687L36.25 35.8226C36.2693 36.5249 35.5773 37.0277 34.9153 36.7923L31 35.4Z" fill="#A1C7FF" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>                
            }
            {
                level === "3" && <svg width="62" height="63" viewBox="0 0 62 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style={{ mixBlendMode: 'screen' }}opacity="0.24">
                <path fillRule="evenodd" clipRule="evenodd" d="M48 56C49.1046 56 50 56.8954 50 58C50 59.1046 49.1046 60 48 60H30C29.8824 60 29.7673 59.9899 29.6553 59.9704C23.2305 59.687 17.3308 57.3828 12.5761 53.6779C12.1894 53.3766 11.6067 52.8771 11.1748 52.5013C10.8054 52.1799 10.3333 52 9.84362 52H5C3.89543 52 3 51.1046 3 50C3 48.8954 3.89543 48 5 48H7C8.10457 48 9 47.1046 9 46C9 44.8954 8.10457 44 7 44H2C0.89543 44 0 43.1046 0 42C0 40.8954 0.89543 40 2 40H3C4.10457 40 5 39.1046 5 38C5 36.8954 4.10457 36 3 36C2.1913 36 1.49962 35.4171 1.36506 34.6196C1.31617 34.3299 1.27734 34.0966 1.27093 34.0492C1.09227 32.7249 1 31.3732 1 30C1 13.4315 14.4315 0 31 0C36 0 41 0 46 0C47.1046 0 48 0.89543 48 2C48 3.10457 47.1046 4 46 4H43C41.8954 4 41 4.89543 41 6C41 7.10457 41.8954 8 43 8H55C56.1046 8 57 8.89543 57 10C57 11.1038 56.1058 11.9988 55.0022 12L52 12C50.8954 12 50 12.8954 50 14C50 15.1046 50.8954 16 52 16H56.306C57.0624 16 57.7556 16.4259 58.0835 17.1075C58.2807 17.5171 58.488 17.959 58.6237 18.2783C60.1536 21.8793 61 25.8408 61 30C61 31.3068 60.9164 32.5942 60.7544 33.8569C60.7271 34.0692 60.6853 34.3418 60.6398 34.6208C60.5093 35.4213 59.8111 36 59 36C57.8954 36 57 36.8954 57 38C57 39.1046 57.8954 40 59 40H60C61.1046 40 62 40.8954 62 42C62 43.1046 61.1046 44 60 44H58.7162C57.9901 44 57.3224 44.3942 56.9597 45.0232C56.7241 45.4317 56.4621 45.8761 56.2675 46.1794C55.8114 46.8903 55.326 47.5807 54.8132 48.2489C54.2981 48.9201 53.7553 49.5688 53.1864 50.1934C52.8743 50.5362 52.3685 51.044 51.974 51.4341C51.605 51.799 51.1061 52 50.5871 52H45C43.8954 52 43 52.8954 43 54C43 55.0969 43.883 55.9875 44.9769 55.9999L48 56Z" fill="white"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M24.0718 26L37.9282 34L21.76 62.0041C21.3829 62.6573 20.446 62.6738 20.0461 62.0344L16.125 55.7643L8.73435 55.5035C7.98061 55.4769 7.52648 54.6573 7.90358 54.0041L24.0718 26Z" fill="#A1C7FF"/>
                <mask id="mask0_63_290" mask-type="luminance" maskUnits="userSpaceOnUse" x="7" y="26" width="31" height="37">
                <path fillRule="evenodd" clipRule="evenodd" d="M24.0718 26L37.9282 34L21.76 62.0041C21.3829 62.6573 20.446 62.6738 20.0461 62.0344L16.125 55.7643L8.73435 55.5035C7.98061 55.4769 7.52648 54.6573 7.90358 54.0041L24.0718 26Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_63_290)">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.5359 41.8564L26.4641 45.8564L17.4641 61.4449L10.5359 57.4449L19.5359 41.8564Z" fill="#E7F1FF"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M37.9282 26L24.0718 34L40.24 62.0041C40.6171 62.6573 41.554 62.6738 41.9539 62.0344L45.875 55.7643L53.2657 55.5035C54.0194 55.4769 54.4735 54.6573 54.0964 54.0041L37.9282 26Z" fill="#A1C7FF"/>
                <mask id="mask1_63_290" mask-type="luminance" maskUnits="userSpaceOnUse" x="24" y="26" width="31" height="37">
                <path fillRule="evenodd" clipRule="evenodd" d="M37.9282 26L24.0718 34L40.24 62.0041C40.6171 62.6573 41.554 62.6738 41.9539 62.0344L45.875 55.7643L53.2657 55.5035C54.0194 55.4769 54.4735 54.6573 54.0964 54.0041L37.9282 26Z" fill="white"/>
                </mask>
                <g mask="url(#mask1_63_290)">
                <path fillRule="evenodd" clipRule="evenodd" d="M42.4641 41.8564L35.5359 45.8564L44.5359 61.4449L51.4641 57.4449L42.4641 41.8564Z" fill="#E7F1FF"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M49 16.677C49 16.2681 49.249 15.9004 49.6286 15.7486L53.1772 14.3291C53.5713 14.1715 54 14.4617 54 14.8862V30.323C54 30.7319 53.751 31.0996 53.3714 31.2514L49 33V16.677Z" fill="#A1C7FF"/>
                <mask id="mask2_63_290" mask-type="luminance" maskUnits="userSpaceOnUse" x="49" y="14" width="5" height="19">
                <path fillRule="evenodd" clipRule="evenodd" d="M49 16.677C49 16.2681 49.249 15.9004 49.6286 15.7486L53.1772 14.3291C53.5713 14.1715 54 14.4617 54 14.8862V30.323C54 30.7319 53.751 31.0996 53.3714 31.2514L49 33V16.677Z" fill="white"/>
                </mask>
                <g mask="url(#mask2_63_290)">
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M13 16.677C13 16.2681 12.751 15.9004 12.3714 15.7486L8.82283 14.3291C8.42872 14.1715 8 14.4617 8 14.8862V30.323C8 30.7319 8.24895 31.0996 8.62861 31.2514L13 33V16.677Z" fill="#A1C7FF"/>
                <mask id="mask3_63_290" mask-type="luminance" maskUnits="userSpaceOnUse" x="8" y="14" width="5" height="19">
                <path fillRule="evenodd" clipRule="evenodd" d="M13 16.677C13 16.2681 12.751 15.9004 12.3714 15.7486L8.82283 14.3291C8.42872 14.1715 8 14.4617 8 14.8862V30.323C8 30.7319 8.24895 31.0996 8.62861 31.2514L13 33V16.677Z" fill="white"/>
                </mask>
                <g mask="url(#mask3_63_290)">
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M44 11.3538C44 10.681 43.349 10.2001 42.7059 10.398L31 13.9998L19.2941 10.398C18.651 10.2001 18 10.681 18 11.3538V25.9998C18 26.5521 18.4477 26.9998 19 26.9998H43C43.5523 26.9998 44 26.5521 44 25.9998V11.3538Z" fill="#A1C7FF"/>
                <mask id="mask4_63_290" mask-type="luminance" maskUnits="userSpaceOnUse" x="18" y="10" width="26" height="17">
                <path fillRule="evenodd" clipRule="evenodd" d="M44 11.3538C44 10.681 43.349 10.2001 42.7059 10.398L31 13.9998L19.2941 10.398C18.651 10.2001 18 10.681 18 11.3538V25.9998C18 26.5521 18.4477 26.9998 19 26.9998H43C43.5523 26.9998 44 26.5521 44 25.9998V11.3538Z" fill="white"/>
                </mask>
                <g mask="url(#mask4_63_290)">
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M29 8.1547C30.2376 7.44017 31.7624 7.44017 33 8.1547L48.9186 17.3453C50.1562 18.0598 50.9186 19.3803 50.9186 20.8094V39.1906C50.9186 40.6197 50.1562 41.9402 48.9186 42.6547L33 51.8453C31.7624 52.5598 30.2376 52.5598 29 51.8453L13.0814 42.6547C11.8438 41.9402 11.0814 40.6197 11.0814 39.1906V20.8094C11.0814 19.3803 11.8438 18.0598 13.0814 17.3453L29 8.1547Z" fill="#B6D5FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M30 14.5774C30.6188 14.2201 31.3812 14.2201 32 14.5774L43.8564 21.4226C44.4752 21.7799 44.8564 22.4402 44.8564 23.1547V36.8453C44.8564 37.5598 44.4752 38.2201 43.8564 38.5774L32 45.4226C31.3812 45.7799 30.6188 45.7799 30 45.4226L18.1436 38.5774C17.5248 38.2201 17.1436 37.5598 17.1436 36.8453V23.1547C17.1436 22.4402 17.5248 21.7799 18.1436 21.4226L30 14.5774Z" fill="#D6E7FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M31 35.4L27.0847 36.7923C26.4227 37.0277 25.7307 36.5249 25.75 35.8226L25.8643 31.6687L23.3303 28.3753C22.9018 27.8184 23.1661 27.0049 23.8401 26.8063L27.826 25.6313L30.1751 22.2036C30.5723 21.624 31.4277 21.624 31.8249 22.2036L34.174 25.6313L38.1599 26.8063C38.8339 27.0049 39.0982 27.8184 38.6697 28.3753L36.1357 31.6687L36.25 35.8226C36.2693 36.5249 35.5773 37.0277 34.9153 36.7923L31 35.4Z" fill="#A1C7FF" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>                
            }
            {
                level === "4" && <svg width="62" height="64" viewBox="0 0 62 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style={{ mixBlendMode: 'screen' }}opacity="0.24">
                <path fillRule="evenodd" clipRule="evenodd" d="M48 56C49.1046 56 50 56.8954 50 58C50 59.1046 49.1046 60 48 60H30C29.8824 60 29.7673 59.9899 29.6553 59.9704C23.2305 59.687 17.3308 57.3828 12.5761 53.6779C12.1894 53.3766 11.6067 52.8771 11.1748 52.5013C10.8054 52.1799 10.3333 52 9.84362 52H5C3.89543 52 3 51.1046 3 50C3 48.8954 3.89543 48 5 48H7C8.10457 48 9 47.1046 9 46C9 44.8954 8.10457 44 7 44H2C0.89543 44 0 43.1046 0 42C0 40.8954 0.89543 40 2 40H3C4.10457 40 5 39.1046 5 38C5 36.8954 4.10457 36 3 36C2.1913 36 1.49962 35.4171 1.36506 34.6196C1.31617 34.3299 1.27734 34.0966 1.27093 34.0492C1.09227 32.7249 1 31.3732 1 30C1 13.4315 14.4315 0 31 0C36 0 41 0 46 0C47.1046 0 48 0.89543 48 2C48 3.10457 47.1046 4 46 4H43C41.8954 4 41 4.89543 41 6C41 7.10457 41.8954 8 43 8H55C56.1046 8 57 8.89543 57 10C57 11.1038 56.1058 11.9988 55.0022 12L52 12C50.8954 12 50 12.8954 50 14C50 15.1046 50.8954 16 52 16H56.306C57.0624 16 57.7556 16.4259 58.0835 17.1075C58.2807 17.5171 58.488 17.959 58.6237 18.2783C60.1536 21.8793 61 25.8408 61 30C61 31.3068 60.9164 32.5942 60.7544 33.8569C60.7271 34.0692 60.6853 34.3418 60.6398 34.6208C60.5093 35.4213 59.8111 36 59 36C57.8954 36 57 36.8954 57 38C57 39.1046 57.8954 40 59 40H60C61.1046 40 62 40.8954 62 42C62 43.1046 61.1046 44 60 44H58.7162C57.9901 44 57.3224 44.3942 56.9597 45.0232C56.7241 45.4317 56.4621 45.8761 56.2675 46.1794C55.8114 46.8903 55.326 47.5807 54.8132 48.2489C54.2981 48.9201 53.7553 49.5688 53.1864 50.1934C52.8743 50.5362 52.3685 51.044 51.974 51.4341C51.605 51.799 51.1061 52 50.5871 52H45C43.8954 52 43 52.8954 43 54C43 55.0969 43.883 55.9875 44.9769 55.9999L48 56Z" fill="white"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M16 27H32V57.382C32 58.1253 31.2177 58.6088 30.5528 58.2764L24 55L17.4472 58.2764C16.7823 58.6088 16 58.1253 16 57.382V27Z" fill="#A1C7FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M30 27H46V57.382C46 58.1253 45.2177 58.6088 44.5528 58.2764L38 55L31.4472 58.2764C30.7823 58.6088 30 58.1253 30 57.382V27Z" fill="#A1C7FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M23 32H39V62.382C39 63.1253 38.2177 63.6088 37.5528 63.2764L31 60L24.4472 63.2764C23.7823 63.6088 23 63.1253 23 62.382V32Z" fill="#E7F1FF"/>
                <mask id="mask0_63_316" mask-type="luminance" maskUnits="userSpaceOnUse" x="23" y="32" width="16" height="32">
                <path fillRule="evenodd" clipRule="evenodd" d="M23 32H39V62.382C39 63.1253 38.2177 63.6088 37.5528 63.2764L31 60L24.4472 63.2764C23.7823 63.6088 23 63.1253 23 62.382V32Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_63_316)">
                <rect x="27" y="32" width="8" height="32" fill="#A1C7FF"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M43.7253 10.3643C44.3641 10.1818 45 10.6614 45 11.3258V26.0001C45 26.5524 44.5523 27.0001 44 27.0001H18C17.4477 27.0001 17 26.5524 17 26.0001V11.3258C17 10.6614 17.6359 10.1818 18.2747 10.3643L31 14.0001L43.7253 10.3643ZM13 16.6771C13 16.2682 12.751 15.9005 12.3714 15.7486L8.82283 14.3292C8.42872 14.1716 8 14.4618 8 14.8863V30.323C8 30.7319 8.24895 31.0996 8.62861 31.2515L13 33.0001V16.6771ZM49 16.6771C49 16.2682 49.249 15.9005 49.6286 15.7486L53.1772 14.3292C53.5713 14.1716 54 14.4618 54 14.8863V30.323C54 30.7319 53.751 31.0996 53.3714 31.2515L49 33.0001V16.6771Z" fill="#A1C7FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M29 8.1547C30.2376 7.44017 31.7624 7.44017 33 8.1547L48.9186 17.3453C50.1562 18.0598 50.9186 19.3803 50.9186 20.8094V39.1906C50.9186 40.6197 50.1562 41.9402 48.9186 42.6547L33 51.8453C31.7624 52.5598 30.2376 52.5598 29 51.8453L13.0814 42.6547C11.8438 41.9402 11.0814 40.6197 11.0814 39.1906V20.8094C11.0814 19.3803 11.8438 18.0598 13.0814 17.3453L29 8.1547Z" fill="#B6D5FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M30 14.5774C30.6188 14.2201 31.3812 14.2201 32 14.5774L43.8564 21.4226C44.4752 21.7799 44.8564 22.4402 44.8564 23.1547V36.8453C44.8564 37.5598 44.4752 38.2201 43.8564 38.5774L32 45.4226C31.3812 45.7799 30.6188 45.7799 30 45.4226L18.1436 38.5774C17.5248 38.2201 17.1436 37.5598 17.1436 36.8453V23.1547C17.1436 22.4402 17.5248 21.7799 18.1436 21.4226L30 14.5774Z" fill="#D6E7FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M31 21L39 30L31 39L23 30L31 21Z" fill="#A1C7FF" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>                
            }
            {
                level === "5" && <svg width="62" height="64" viewBox="0 0 62 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style={{ mixBlendMode: 'screen' }}opacity="0.24">
                <path fillRule="evenodd" clipRule="evenodd" d="M48 56C49.1046 56 50 56.8954 50 58C50 59.1046 49.1046 60 48 60H30C29.8824 60 29.7673 59.9899 29.6553 59.9704C23.2305 59.687 17.3308 57.3828 12.5761 53.6779C12.1894 53.3766 11.6067 52.8771 11.1748 52.5013C10.8054 52.1799 10.3333 52 9.84362 52H5C3.89543 52 3 51.1046 3 50C3 48.8954 3.89543 48 5 48H7C8.10457 48 9 47.1046 9 46C9 44.8954 8.10457 44 7 44H2C0.89543 44 0 43.1046 0 42C0 40.8954 0.89543 40 2 40H3C4.10457 40 5 39.1046 5 38C5 36.8954 4.10457 36 3 36C2.1913 36 1.49962 35.4171 1.36506 34.6196C1.31617 34.3299 1.27734 34.0966 1.27093 34.0492C1.09227 32.7249 1 31.3732 1 30C1 13.4315 14.4315 0 31 0C36 0 41 0 46 0C47.1046 0 48 0.89543 48 2C48 3.10457 47.1046 4 46 4H43C41.8954 4 41 4.89543 41 6C41 7.10457 41.8954 8 43 8H55C56.1046 8 57 8.89543 57 10C57 11.1038 56.1058 11.9988 55.0022 12L52 12C50.8954 12 50 12.8954 50 14C50 15.1046 50.8954 16 52 16H56.306C57.0624 16 57.7556 16.4259 58.0835 17.1075C58.2807 17.5171 58.488 17.959 58.6237 18.2783C60.1536 21.8793 61 25.8408 61 30C61 31.3068 60.9164 32.5942 60.7544 33.8569C60.7271 34.0692 60.6853 34.3418 60.6398 34.6208C60.5093 35.4213 59.8111 36 59 36C57.8954 36 57 36.8954 57 38C57 39.1046 57.8954 40 59 40H60C61.1046 40 62 40.8954 62 42C62 43.1046 61.1046 44 60 44H58.7162C57.9901 44 57.3224 44.3942 56.9597 45.0232C56.7241 45.4317 56.4621 45.8761 56.2675 46.1794C55.8114 46.8903 55.326 47.5807 54.8132 48.2489C54.2981 48.9201 53.7553 49.5688 53.1864 50.1934C52.8743 50.5362 52.3685 51.044 51.974 51.4341C51.605 51.799 51.1061 52 50.5871 52H45C43.8954 52 43 52.8954 43 54C43 55.0969 43.883 55.9875 44.9769 55.9999L48 56Z" fill="white"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M16 27H32V57.382C32 58.1253 31.2177 58.6088 30.5528 58.2764L24 55L17.4472 58.2764C16.7823 58.6088 16 58.1253 16 57.382V27Z" fill="#A1C7FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M30 27H46V57.382C46 58.1253 45.2177 58.6088 44.5528 58.2764L38 55L31.4472 58.2764C30.7823 58.6088 30 58.1253 30 57.382V27Z" fill="#A1C7FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M23 32H39V62.382C39 63.1253 38.2177 63.6088 37.5528 63.2764L31 60L24.4472 63.2764C23.7823 63.6088 23 63.1253 23 62.382V32Z" fill="#E7F1FF"/>
                <mask id="mask0_63_334" mask-type="luminance" maskUnits="userSpaceOnUse" x="23" y="32" width="16" height="32">
                <path fillRule="evenodd" clipRule="evenodd" d="M23 32H39V62.382C39 63.1253 38.2177 63.6088 37.5528 63.2764L31 60L24.4472 63.2764C23.7823 63.6088 23 63.1253 23 62.382V32Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_63_334)">
                <rect x="27" y="32" width="8" height="32" fill="#A1C7FF"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M37.4796 17.6748V8.60702C37.4796 8.51925 37.5027 8.43303 37.5466 8.35702C37.6847 8.11787 37.9905 8.03593 38.2296 8.174L45.6889 12.4806C46.153 12.7486 46.4389 13.2438 46.4389 13.7797V19.4686C46.4389 19.9163 46.3377 20.3582 46.1427 20.7613C45.4288 22.2376 43.6533 22.8556 42.177 22.1417L39.4558 20.8257C38.2474 20.2413 37.4796 19.0172 37.4796 17.6748ZM14 18.5L8.99998 16.5V15.5L4.19837 13.4993C3.72615 13.3025 3.24009 13.7491 3.39623 14.2363L9.0921 32.0074C9.19112 32.3163 9.43387 32.558 9.74325 32.6557L14 34V18.5ZM9.47396 37.763L13 36L15 41.5L9.05264 44.8985C8.62138 45.1449 8.09457 44.7905 8.16022 44.2982L8.92994 38.5252C8.97375 38.1967 9.1775 37.9112 9.47396 37.763ZM52.526 37.763L49 36L47 41.5L52.9473 44.8985C53.3786 45.1449 53.9054 44.7905 53.8397 44.2982L53.07 38.5252C53.0262 38.1967 52.8225 37.9112 52.526 37.763ZM53 16.5L48 18.5V34L52.2567 32.6557C52.5661 32.558 52.8088 32.3163 52.9079 32.0074L58.6037 14.2363C58.7599 13.7491 58.2738 13.3025 57.8016 13.4993L53 15.5V16.5ZM24.5203 8.60702V17.6748C24.5203 19.0172 23.7526 20.2413 22.5441 20.8257L19.823 22.1417C18.3467 22.8556 16.5712 22.2376 15.8572 20.7613C15.6623 20.3582 15.561 19.9163 15.561 19.4686V13.7797C15.561 13.2438 15.8469 12.7486 16.311 12.4806L23.7703 8.174C24.0095 8.03593 24.3153 8.11787 24.4533 8.35702C24.4972 8.43303 24.5203 8.51925 24.5203 8.60702Z" fill="#A1C7FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M29 8.1547C30.2376 7.44017 31.7624 7.44017 33 8.1547L48.9186 17.3453C50.1562 18.0598 50.9186 19.3803 50.9186 20.8094V39.1906C50.9186 40.6197 50.1562 41.9402 48.9186 42.6547L33 51.8453C31.7624 52.5598 30.2376 52.5598 29 51.8453L13.0814 42.6547C11.8438 41.9402 11.0814 40.6197 11.0814 39.1906V20.8094C11.0814 19.3803 11.8438 18.0598 13.0814 17.3453L29 8.1547Z" fill="#B6D5FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M30 14.5774C30.6188 14.2201 31.3812 14.2201 32 14.5774L43.8564 21.4226C44.4752 21.7799 44.8564 22.4402 44.8564 23.1547V36.8453C44.8564 37.5598 44.4752 38.2201 43.8564 38.5774L32 45.4226C31.3812 45.7799 30.6188 45.7799 30 45.4226L18.1436 38.5774C17.5248 38.2201 17.1436 37.5598 17.1436 36.8453V23.1547C17.1436 22.4402 17.5248 21.7799 18.1436 21.4226L30 14.5774Z" fill="#D6E7FF"/>
                <mask id="mask1_63_334" mask-type="luminance" maskUnits="userSpaceOnUse" x="17" y="14" width="28" height="32">
                <path fillRule="evenodd" clipRule="evenodd" d="M30 14.5774C30.6188 14.2201 31.3812 14.2201 32 14.5774L43.8564 21.4226C44.4752 21.7799 44.8564 22.4402 44.8564 23.1547V36.8453C44.8564 37.5598 44.4752 38.2201 43.8564 38.5774L32 45.4226C31.3812 45.7799 30.6188 45.7799 30 45.4226L18.1436 38.5774C17.5248 38.2201 17.1436 37.5598 17.1436 36.8453V23.1547C17.1436 22.4402 17.5248 21.7799 18.1436 21.4226L30 14.5774Z" fill="white"/>
                </mask>
                <g mask="url(#mask1_63_334)">
                <path d="M24.7778 24.5575L31.0001 20.8335L37.2223 24.5575V35.4429L31.0001 39.1668L24.7778 35.4429V24.5575Z" fill="#A1C7FF" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                </svg>                
            }
            {
                level === "6" && <svg width="62" height="64" viewBox="0 0 62 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style={{ mixBlendMode: 'screen' }}opacity="0.24">
                <path fillRule="evenodd" clipRule="evenodd" d="M48 56C49.1046 56 50 56.8954 50 58C50 59.1046 49.1046 60 48 60H30C29.8824 60 29.7673 59.9899 29.6553 59.9704C23.2305 59.687 17.3308 57.3828 12.5761 53.6779C12.1894 53.3766 11.6067 52.8771 11.1748 52.5013C10.8054 52.1799 10.3333 52 9.84362 52H5C3.89543 52 3 51.1046 3 50C3 48.8954 3.89543 48 5 48H7C8.10457 48 9 47.1046 9 46C9 44.8954 8.10457 44 7 44H2C0.89543 44 0 43.1046 0 42C0 40.8954 0.89543 40 2 40H3C4.10457 40 5 39.1046 5 38C5 36.8954 4.10457 36 3 36C2.1913 36 1.49962 35.4171 1.36506 34.6196C1.31617 34.3299 1.27734 34.0966 1.27093 34.0492C1.09227 32.7249 1 31.3732 1 30C1 13.4315 14.4315 0 31 0C36 0 41 0 46 0C47.1046 0 48 0.89543 48 2C48 3.10457 47.1046 4 46 4H43C41.8954 4 41 4.89543 41 6C41 7.10457 41.8954 8 43 8H55C56.1046 8 57 8.89543 57 10C57 11.1038 56.1058 11.9988 55.0022 12L52 12C50.8954 12 50 12.8954 50 14C50 15.1046 50.8954 16 52 16H56.306C57.0624 16 57.7556 16.4259 58.0835 17.1075C58.2807 17.5171 58.488 17.959 58.6237 18.2783C60.1536 21.8793 61 25.8408 61 30C61 31.3068 60.9164 32.5942 60.7544 33.8569C60.7271 34.0692 60.6853 34.3418 60.6398 34.6208C60.5093 35.4213 59.8111 36 59 36C57.8954 36 57 36.8954 57 38C57 39.1046 57.8954 40 59 40H60C61.1046 40 62 40.8954 62 42C62 43.1046 61.1046 44 60 44H58.7162C57.9901 44 57.3224 44.3942 56.9597 45.0232C56.7241 45.4317 56.4621 45.8761 56.2675 46.1794C55.8114 46.8903 55.326 47.5807 54.8132 48.2489C54.2981 48.9201 53.7553 49.5688 53.1864 50.1934C52.8743 50.5362 52.3685 51.044 51.974 51.4341C51.605 51.799 51.1061 52 50.5871 52H45C43.8954 52 43 52.8954 43 54C43 55.0969 43.883 55.9875 44.9769 55.9999L48 56Z" fill="white"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M15 27H31V57.382C31 58.1253 30.2177 58.6088 29.5528 58.2764L23 55L16.4472 58.2764C15.7823 58.6088 15 58.1253 15 57.382V27Z" fill="#A1C7FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M19 30H35V60.382C35 61.1253 34.2177 61.6088 33.5528 61.2764L27 58L20.4472 61.2764C19.7823 61.6088 19 61.1253 19 60.382V30Z" fill="#C0DBFF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M31 27H47V57.382C47 58.1253 46.2177 58.6088 45.5528 58.2764L39 55L32.4472 58.2764C31.7823 58.6088 31 58.1253 31 57.382V27Z" fill="#A1C7FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M27 30H43V60.382C43 61.1253 42.2177 61.6088 41.5528 61.2764L35 58L28.4472 61.2764C27.7823 61.6088 27 61.1253 27 60.382V30Z" fill="#C0DBFF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M23 32H39V62.382C39 63.1253 38.2177 63.6088 37.5528 63.2764L31 60L24.4472 63.2764C23.7823 63.6088 23 63.1253 23 62.382V32Z" fill="#E7F1FF"/>
                <mask id="mask0_63_356" mask-type="luminance" maskUnits="userSpaceOnUse" x="23" y="32" width="16" height="32">
                <path fillRule="evenodd" clipRule="evenodd" d="M23 32H39V62.382C39 63.1253 38.2177 63.6088 37.5528 63.2764L31 60L24.4472 63.2764C23.7823 63.6088 23 63.1253 23 62.382V32Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_63_356)">
                <rect x="27" y="32" width="8" height="32" fill="#A1C7FF"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M31.5029 5.12064L35 7.09259V6.30233C35 5.31297 36.2831 4.92441 36.832 5.74755L39.3646 9.5456L46.5063 13.7107C46.8136 13.8899 47.0025 14.2189 47.0025 14.5746V19.2593C47.0025 20.031 46.1654 20.5119 45.4988 20.1231L35.4962 14.2895C35.1889 14.1103 35 13.7814 35 13.4257V11.5001V11.4875H27.0025V11.5001V13.4257C27.0025 13.7814 26.8136 14.1103 26.5063 14.2895L16.5038 20.1231C15.8371 20.5119 15 20.031 15 19.2593V14.5746C15 14.2189 15.1889 13.8899 15.4962 13.7107L22.638 9.5456L25.1705 5.74755C25.7194 4.92441 27.0025 5.31297 27.0025 6.30233V7.09852L30.5216 5.12002C30.8263 4.94871 31.1984 4.94894 31.5029 5.12064ZM8.81654 16.1238L13.8165 18.1238V22.3239L15.8165 23.1238V27.3238L17.8165 28.1238V32.3238L19.8165 33.1238V38.1239L10.2681 33.9021C9.95721 33.7646 9.73744 33.4787 9.68462 33.1429L9.07361 29.2582L8.2681 28.9021C7.95721 28.7646 7.73744 28.4787 7.68462 28.1429L7.07361 24.2582L6.2681 23.9021C5.95721 23.7646 5.73744 23.4787 5.68462 23.1429L5.07361 19.2582L4.2681 18.9021C3.95721 18.7646 3.73744 18.4787 3.68462 18.1429L2.98321 13.6835C2.91031 13.22 3.37362 12.856 3.80669 13.0364L8.81654 15.1238V16.1238ZM53.1835 16.1238L48.1835 18.1238V22.3239L46.1835 23.1238V27.3238L44.1835 28.1238V32.3238L42.1835 33.1238V38.1239L51.7319 33.9021C52.0428 33.7646 52.2626 33.4787 52.3154 33.1429L52.9264 29.2582L53.7319 28.9021C54.0428 28.7646 54.2626 28.4787 54.3154 28.1429L54.9264 24.2582L55.7319 23.9021C56.0428 23.7646 56.2626 23.4787 56.3154 23.1429L56.9264 19.2582L57.7319 18.9021C58.0428 18.7646 58.2626 18.4787 58.3154 18.1429L59.0168 13.6835C59.0897 13.22 58.6264 12.856 58.1933 13.0364L53.1835 15.1238V16.1238ZM13 36.0001L9.47397 37.7631C9.17751 37.9114 8.97376 38.1969 8.92996 38.5254L8.16023 44.2984C8.09458 44.7907 8.6214 45.145 9.05265 44.8986L13.5 42.3573V44.0305C13.5 44.2091 13.5953 44.3742 13.75 44.4635L28.25 52.8351C29.9517 53.8176 32.0483 53.8176 33.75 52.8351L48.25 44.4635C48.4047 44.3742 48.5 44.2091 48.5 44.0305V42.3573L52.9473 44.8986C53.3786 45.145 53.9054 44.7907 53.8398 44.2984L53.07 38.5254C53.0262 38.1969 52.8225 37.9114 52.526 37.7631L49 36.0001L47.6309 39.7652L34.0622 47.6409C32.1686 48.74 29.8313 48.74 27.9378 47.6409L14.3691 39.7652L13 36.0001Z" fill="#A1C7FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M29 8.1547C30.2376 7.44017 31.7624 7.44017 33 8.1547L48.9186 17.3453C50.1562 18.0598 50.9186 19.3803 50.9186 20.8094V39.1906C50.9186 40.6197 50.1562 41.9402 48.9186 42.6547L33 51.8453C31.7624 52.5598 30.2376 52.5598 29 51.8453L13.0814 42.6547C11.8438 41.9402 11.0814 40.6197 11.0814 39.1906V20.8094C11.0814 19.3803 11.8438 18.0598 13.0814 17.3453L29 8.1547Z" fill="#B6D5FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M30 14.5774C30.6188 14.2201 31.3812 14.2201 32 14.5774L43.8564 21.4226C44.4752 21.7799 44.8564 22.4402 44.8564 23.1547V36.8453C44.8564 37.5598 44.4752 38.2201 43.8564 38.5774L32 45.4226C31.3812 45.7799 30.6188 45.7799 30 45.4226L18.1436 38.5774C17.5248 38.2201 17.1436 37.5598 17.1436 36.8453V23.1547C17.1436 22.4402 17.5248 21.7799 18.1436 21.4226L30 14.5774Z" fill="#D6E7FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M24.5 24H37L40 29L31 38L22 29L24.5 24Z" fill="#A1C7FF" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>                
            }
            </>
        )
    }
        
}
export default Badge