import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const PhotoViewer = ({children , props}) => {
    return (
        <div>
            <PhotoProvider>
                <PhotoView src={props.src}>
                    {children}
                </PhotoView>
            </PhotoProvider>
        </div>
    );
};

export default PhotoViewer;