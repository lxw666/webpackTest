import _ from 'lodash';
import Print from '@/print';
export function printMe(){
	Print.call(null, 'Hello printMe');
	console.log(_.join(['printMe', process.env.NODE_ENV], ' '))
}
export function print(x){
	return x * x;
}
export function unuser(x){
	return x * x * x;
}