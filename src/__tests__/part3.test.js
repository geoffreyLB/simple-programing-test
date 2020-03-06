import delay from 'delay'

import { a, b } from '../part3'

const wait = jest.fn().mockImplementation(delay)

describe('Part 3: Async functions', () => {

    afterEach(wait.mockClear)

    test('a) Call 10 times wait async method with 100 ms. Execution time must last 1 sec. [c5384fbc]', async () => {
        const times = 10
        const duration = 100

        const solution = async wait => {
            for (let i = 0; i < times; i++)
                await wait(duration)
        }

        const start = new Date()

        const result = await Promise.all([
            a(wait).then(() => new Date() - start),
            solution(delay).then(() => new Date() - start)
        ])

        expect(wait).toHaveBeenCalledTimes(times)

        for (let i = 1; i <= times; i++)
            expect(wait).toHaveBeenNthCalledWith(i, duration)

        expect(result[0]).toBe(result[1])
    })

    test('b) Call 4 times wait async method with 1 sec. Execution time must last 2 sec. [1a6a4ae9]', async () => {
        const times = 4
        const duration = 1000

        const solution = async wait => {
            await Promise.all([wait(duration), wait(duration)])
            await Promise.all([wait(duration), wait(duration)])
        }

        const start = new Date()

        const result = await Promise.all([
            b(wait).then(() => new Date() - start),
            solution(delay).then(() => new Date() - start)
        ])

        expect(wait).toHaveBeenCalledTimes(times)

        for (let i = 1; i <= times; i++)
            expect(wait).toHaveBeenNthCalledWith(i, duration)
        
        expect(result[0]).toBe(result[1])
    })

})
