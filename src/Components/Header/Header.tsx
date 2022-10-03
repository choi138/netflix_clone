import styled from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
// Framer Motion은 직관적인 코드를 통해 손쉽게 애니메이션을 제작하게 해준다. 
// useScroll는 스크롤을 감지하는것이다.
import { useNavigate, useMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "./HeaderStyle";
import { useForm } from "react-hook-form";

interface IForm {
    keyword: string;
}

function Header() {
    const [searchOpen, setSearchOpen] = useState(false);
    const homeMatch = useMatch('/netflix_clone/'); // useMatch는 현재 경로가 특정 경로와 일치하는지 여부를 반환한다.
    const tvMatch = useMatch('/netflix_clone/tv');
    const movieMatch = useMatch('/netflix_clone/movie');
    const navAnimation = useAnimation();
    // console.log(homeMatch, tvMatch); // 경로 파악 가능
    const inputAnimation = useAnimation();
    const { scrollY } = useScroll();
    //useScroll는 두가지 값을 반환한다. 첫번째는 x,y에 대하 스크롤 진행도를 0에서 1사이의 값으로 알 수 있다. 이 값은 끝에서부터 얼마나 떨어져있는지를 0퍼센트부터 100퍼센트 사이의 값으로 나타내준다.
    // 두번째는 얼머나 멀리 이동했는지 픽셀 단위로 나타내는 것이다. 
    // const toggleSearch = () => setSearchOpen(!searchOpen);
    const toggleSearch = () => {
        // 코드로부터 애니메이션을 실행시키고 있다. 애니메이션을 실행시키는 또 하나의 방법이다. 
        // 애니메이션을 동시에 실행시키고 싶을때 유용하고 중요하다. 
        if (searchOpen) {
            inputAnimation.start({
                scaleX: 0,
            });
            //trigger the close animation
        } else {
            inputAnimation.start({
                scaleX: 1,
            });
            //trigger the open animation
        }
        setSearchOpen((prev) => !prev)
    };
    useEffect(() => {
        scrollY.onChange(() => {
            if (scrollY.get() > 80) {
                navAnimation.start("scroll");
                // navAnimation.start({
                //      backgroundColor: "rgba(0, 0, 0, 1)",
                // })
            } else {
                navAnimation.start("top");
                // navAnimation.start({
                //     backgroundColor: "rgba(0, 0, 0, 0)",
                // })
            }
        });
    }, [scrollY, navAnimation]);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<IForm>();
    const onSearch = (data: IForm) => {
        navigate(`/fm/search?keyword=${data.keyword}`);
    }
    return (
        <S.Nav
            variants={S.navVariants} // variants는 애니메이션을 정의하는 객체이다.
            // animate={{backgroundColor: scrollY.get()>80 ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,1)'}} // animate는 애니메이션을 실행시키는 객체이다.
            animate={navAnimation} // animate는 애니메이션을 실행시키는 것이다.
            initial={"top"} //initial은 애니메이션이 시작되기 전의 상태 즉 초기값.
        >
            <S.Col>
                <S.Logo
                    variants={S.logoVariants}
                    whileHover="active"
                    initial="normal"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1024"
                    height="276.742"
                    viewBox="0 0 1024 276.742"
                >
                    <motion.path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" />
                </S.Logo>
                <S.Items>
                    <S.StyledLink to="/netflix_clone/">
                        <S.Item>Home{homeMatch && <S.Circle layoutId="circle" />}</S.Item>
                    </S.StyledLink>
                    <S.StyledLink to="/netflix_clone/movie">
                        <S.Item>Movie{movieMatch && <S.Circle layoutId="circle" />}</S.Item>
                    </S.StyledLink>
                    <S.StyledLink to="/netflix_clone/tv">
                        <S.Item>Tv Shows{tvMatch && <S.Circle layoutId="circle" />}</S.Item>
                    </S.StyledLink>
                </S.Items>
            </S.Col>
            <S.Col>
                <S.Search onSubmit={handleSubmit(onSearch)}>
                    <S.Input
                        type="any"
                        {...register("keyword", { required: true, minLength: 2 })}
                        animate={inputAnimation}
                        initial={{ scaleX: 0 }}
                        transition={{ type: "linear" }}
                        placeholder="Search for..."
                    />
                    <motion.svg
                        onClick={toggleSearch}
                        animate={{ x: searchOpen ? "-215px" : 0 }}
                        transition={{ type: "linear" }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                        ></path>
                    </motion.svg>
                </S.Search>
            </S.Col>
        </S.Nav>
    )
}

export default Header;