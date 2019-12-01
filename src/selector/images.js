import moment from 'moment';

// Get visible images 

export default (images) => {
    return images.filter((image) => {
        const latestImage = moment(image.datetime);
        return latestImage;
    });
};