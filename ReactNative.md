

import React from 'react';
import { View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
const ZoomModal = ({ images }) => {
    const image = [{ url: images }]
    console.log(image)
    return (
        <View style={{ width: 'auto', height: 200 }}>
            <ImageViewer
                imageUrls={image}
                renderIndicator={() => null}
            />
        </View>
    )
}

export default ZoomModal
