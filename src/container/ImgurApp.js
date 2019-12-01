import React, { Component } from 'react';
import { headers } from '../data/header';
import selectorImages from '../selector/images';
import axios from 'axios';
import Header from '../components/Header/Header';
import Logo from '../components/Logo/Logo';
import SearchForm from '../components/SearchForm/SearchForm';
import Toogle from '../components/Toggle/Toggle';
import Section from '../components/Section/Section';
import ImageList from '../components/ImageList/ImageList';

class ImgurApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            isToggle: false,
            loading: false
        }
    };

    handleChangeToggle = () => {
        this.setState((prevState) => ({ isToggle: !prevState.isToggle }))
    };

    handleSearchFormText = async (text) => {
        this.setState({ loading: true })
        const res = await axios.get(
            `https://api.imgur.com/3/gallery/search/top/week/?q=${text}&q_type=jpg&q_size_px=500`, { headers }
        )

        this.setState({ images: res.data.data, loading: false })
    };

    render() {
        const { images, isToggle, loading } = this.state;
        return (
            <div>
                <Header>
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            <Logo />
                            <SearchForm handleSearchFormText={this.handleSearchFormText} />
                            {images.length > 0 && <Toogle handleChangeToggle={this.handleChangeToggle} isToggle={isToggle} />}
                        </div>
                    </div>
                </Header>
                <div className="container">
                    <Section>
                        <ImageList loading={loading} isToggle={isToggle} images={selectorImages(images)} />
                    </Section>
                </div>
            </div>
        )
    }
};

export default ImgurApp;