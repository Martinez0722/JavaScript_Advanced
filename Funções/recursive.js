function recursiva(max) {
    max++;
    if(max >= 150000) return ;
    console.log(max);
    recursiva(max);

}
recursiva (-10)