import React from 'react'

export default function ProjectDetail(props) {
    console.log(props)
    const {name, built,paragraph} = props.location.state
    return (
        <div>
            {name}
            <br/>
            {built}
            <br/>
            {paragraph}
        </div>
    )
}
