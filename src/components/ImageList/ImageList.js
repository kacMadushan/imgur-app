import React from 'react';
import PropTypes from 'prop-types';
import ImageListItem from './ImageListItem';
import Spinner from '../Spinner/Spinner';

const ImageList = ({ images, isToggle, loading }) => {
    let showImage = null;
    const showSpinner = <Spinner />
    const evenImageList = images.filter(({ score, points, topic_id }) => {
        const result = score + points + topic_id
        return result % 2 === 0
    }).map((image) => <ImageListItem key={image.id} {...image} />);

    const imageList = images.map((image) => <ImageListItem key={image.id} {...image} />);
    if (isToggle) {
        showImage = evenImageList
    } else {
        showImage = imageList
    }
    return (
        <div className="columns is-multiline">
            {loading ? showSpinner : showImage}
        </div>
    )
};

ImageList.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    isToggle: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
}

export default ImageList;
