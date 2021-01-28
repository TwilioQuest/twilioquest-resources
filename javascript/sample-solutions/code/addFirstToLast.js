function addFirstToLast(strings){
    if (strings.length > 0){
        return (strings[0] + strings[strings.length - 1])
    }
    return ""
}