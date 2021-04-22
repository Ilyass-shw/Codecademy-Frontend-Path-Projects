import React from 'react'
import { handleThumbnail } from "../api";

describe('handleThumbnail',()=>{
    it('should return img element with te according provided link as src ', ()=>{
        const ThumbnailLink= 'www.yt.com'

        const expectedImgElement= <img src={ThumbnailLink} alt="post" className="content-image" />
        

        expect(handleThumbnail(ThumbnailLink)).toStrictEqual(expectedImgElement)
    })
})
