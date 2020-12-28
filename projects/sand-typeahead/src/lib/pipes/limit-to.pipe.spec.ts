import { LimitToPipe } from './limit-to.pipe';

const dropdownData = [
    {
        index:0,
        name:'Denmark'
    },
    {
        index:1,
        name:'Switzerland'
    },
    {
        index:2,
        name:'Iceland'
    },
    {
        index:3,
        name:'Finland'
    },
    {
        index:4,
        name:'Japan'
    },
    {
        index:5,
        name:'Sweden'
    }
]

const output = [
    {
        index:0,
        name:'Denmark'
    },
    {
        index:5,
        name:'Sweden'
    }
]
describe('Dropdown data limit pipe',() => {
    it('create an instance',() => {
        const pipe = new LimitToPipe();
        expect(pipe).toBeTruthy()
    })

    it('should be return the array with specified limit', () => {
        const data = JSON.parse(JSON.stringify(dropdownData));
        const pipe = new LimitToPipe();
        expect(pipe.transform(data,2)).toEqual(dropdownData.slice(0,2));
    })

    it('should be return the array with specified limit', () => {
        const data = JSON.parse(JSON.stringify(dropdownData));
        const pipe = new LimitToPipe();
        expect(pipe.transform(data,2,1)).toEqual(dropdownData.slice(1,3));
    })
    it('should return the complete array when the limit is 0', () => {
        const data = JSON.parse(JSON.stringify(dropdownData));
        const pipe = new LimitToPipe();
        expect(pipe.transform(data,0)).toEqual(data);
    })
    it('shoudl return the full array if input is invalid' , () => {
        const pipe = new LimitToPipe();
        expect(pipe.transform('notanarray' as any,2)).toEqual('notanarray' as any);
    })
})