import * as React from 'react'
import { bannerMain, bannerLeftSide, bannerRightSide } from './banners.module.css'
import { container, dFlex } from './global.module.css'

const Banners = ({leftSlot, rightSlot}) => (
    <div className={bannerMain}>
        <div className={container}>
            <div className={dFlex}>
                <div className={bannerLeftSide}>{leftSlot}</div>
                <div className={bannerRightSide}>{rightSlot}</div>
            </div>
        </div>
    </div>
  );


export default Banners;