# ===========================================================================================================
image zoom in react-native

import React from 'react';
import { View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
const ZoomModal = ({ images }) => {
    const image = [{ url: images }]
    console.log(image)
    <!-- 
    return (
        <View style={{ width: 'auto', height: 200 }}>
            <ImageViewer
                imageUrls={image}
                renderIndicator={() => null}
            />
        </View>
    ) 
    -->
}

export default ZoomModal

# ===========================================================================================================
# set up a project in windows
1.npx @react-native-community/cli@latest init test_mobile_app