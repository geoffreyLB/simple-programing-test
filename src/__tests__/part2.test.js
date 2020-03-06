import terms from '../../resources/terms.json'
import { a, b } from '../part2'

describe('Part 2: String manipulation', () => {

    test('a) snake_case to camelCase [d045b0a2]', () => {
        const solution = term => term
            .toLowerCase()
            .replace(/_(.)/g, (match, after) => after.toUpperCase())

        for (const term of terms.snake_case)
            expect(a(term)).toEqual(solution(term))
    })

    test('b) camelCase to snake_case [4b8bcad6]', () => {
        const solution = term => term
            .replace(/(.)([A-Z])/g, (match, before, letter) => `${before}_${letter}`)
            .toLowerCase()

        for (const term of terms.camelCase)
            expect(b(term)).toEqual(solution(term))
    })

})
