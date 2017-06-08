export default function fetchData(repoName: string){
    return fetch("https://api.github.com/search/repositories?q=" + repoName)
        .then((response: any) => response.json());        
}   