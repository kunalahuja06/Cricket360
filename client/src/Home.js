import React from 'react'
import FeaturedPost from './components/FeaturedPost'
import MainFeaturedPost from './components/MainFeaturedPost';
import Grid from '@mui/material/Grid';
function Home() {
  const post={
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  }
  const featuredPosts = [
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
  ];
  return (
    <Grid container>
      <Grid item xl={12}>
        <MainFeaturedPost post={post} />
      </Grid>

      {/* <Grid container xl={12} xs={12} marginY={3}>
        <FeaturedPost post={post} />
        <FeaturedPost post={post} />
      </Grid>
      <Grid container xl={12} xs={12} marginBottom={3}>
        <FeaturedPost post={post} />
        <FeaturedPost post={post} />
      </Grid> */}
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
    </Grid>

    // <div className="container">
    //   <MainFeaturedPost post={post}/>
    //   <FeaturedPost post={post}/>
    // </div>
  );
}

export default Home