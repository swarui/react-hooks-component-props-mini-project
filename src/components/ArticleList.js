import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
    return (
        <div>
            <main>
           
            {posts.map(post => <Article key={post.id} title={post.title} date={post.date} minutes={post.minutes} preview={post.preview}/>)}

            </main>
        </div>
    )
}

export default ArticleList

{
}