import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Box from '../Box/Box';
import Image from '../Image/Image';

const ImageListItem = ({ title, datetime, cover, images_count }) => (
    <div className="column is-12-mobile is-4-tablet is-3-desktop">
        <Box type="block">
            <Image size="thumb" src={cover ? `https://i.imgur.com/${cover}.jpg` : `./assets/images/imgur.jpg`} name={title} />
            <Box type="content">
                <h5 className="posts-title">{title.substring(0, 30) + '...'}</h5>
                <p className="posts-date">{moment(datetime).format('MMM Do YYYY, h:mm a')}</p>
                {images_count && <p className="posts-count">Posts {images_count}</p>}
            </Box>
        </Box>
    </div>
);

ImageListItem.propTypes = {
    title: PropTypes.string.isRequired,
    datetime: PropTypes.number.isRequired,
    cover: PropTypes.string,
    images_count: PropTypes.number
}

export default ImageListItem;