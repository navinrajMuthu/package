const randomNumberGenerator = (min = 0, max = 100)=>{
       return Math.floor(Math.random() * (max - min) + min);
}
export default randomNumberGenerator;