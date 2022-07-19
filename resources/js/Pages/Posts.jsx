import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import PostsList from '@/Components/Homepage/PostsLists';
import Paginate from '@/Components/Homepage/Paginate';
import Navbar from '@/Components/Homepage/Navbar';

export default function PostsPage(props) {
  return (
    <>
      <Head title={props.title} />
      <div className='min-h-screen'>
        <Navbar user={props.auth.user} title={props.title} root={props.root} />
        <div className='text-center pt-6'>
          <h1 className='font-bold text-lg'>✨ {props.title} ✨</h1>
          <p className='text-sm'>{props.description}</p>
        </div>
        <div className='flex flex-col justify-center items-center lg:flex-row lg:flex-wrap lg:items-stretch pt-6 px-4 gap-6'>
          <PostsList posts={props.posts.data} />
        </div>
        <div className='flex justify-center items-center py-6'>
          <Paginate meta={props.posts.meta} />
        </div>
      </div>
    </>
  )
}