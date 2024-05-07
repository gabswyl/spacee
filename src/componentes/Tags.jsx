import React from 'react'
import tags from '../mocks/tags.json'
import styled from 'styled-components'

const TagsDiv = styled.div`
display: flex;
color: #fff;
font-size: 1.5rem;
flex-wrap: wrap;

`

const UlTags = styled.ul`
display: flex;
align-items: center;
gap: 25px;
`

const LiTags = styled.li`
 background-color: rgba(217, 217, 217, 0.3);
padding: 5px 10px;
display: flex;
list-style-type: none;
border-radius: 10px;
`

const Tags = () => {
    return (
        <TagsDiv>
            <p>Busque por tags: </p>
            <UlTags>
                {tags.map((item, index) => (
                    <LiTags key={index}>{item.tags}</LiTags>
                ))}
            </UlTags>
        </TagsDiv>
    )
}

export default Tags