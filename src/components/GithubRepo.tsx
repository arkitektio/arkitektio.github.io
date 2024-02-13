import React from "react"



export const GithubRepo = (props: {url: string, title: string}) => {


    return <a href={props.url} className="text-primary-100 hover:text-primary-400 px-1 py-1 bg-slate-800 rounded rounded-md" target="_blank">
        
        Open {props.title} on Github</a>





}