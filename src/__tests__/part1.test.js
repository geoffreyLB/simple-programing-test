import users from '../../resources/users.json'
import { a, b, c, d, e } from '../part1'

describe('Part 1: Functional programming', () => {

    it('a) Return users older than 32 sorted by first name [e0e3ca34]', () => {
        const solution = users => users
            .filter(({ age }) => age > 32)
            .sort(((prev, next) => {
                if (prev.firstName < next.firstName) return -1
                if (prev.firstName > next.firstName) return 1
                return 0
            }))

        expect(a(users)).toEqual(solution(users))
    })

    test('b) Return full name of female users from the oldest to the youngest [60458a60]', () => {
        const solution = users => users
            .filter(({ gender }) => gender === 'f')
            .sort((prev, next) => next.age - prev.age)
            .map(({ firstName, lastName }) => `${firstName} ${lastName}`)

        expect(b(users)).toEqual(solution(users))
    })

    test('c) Return the total age of users with a last name excluding "e" [bae04200]', () => {
        const solution = users => users
            .filter(({ lastName }) => !lastName.includes('e'))
            .reduce((total, { age }) => total + age, 0)

        expect(c(users)).toEqual(solution(users))
    })

    test('d) Return friendly users who are living in France and anonymize their last name (Miguel H.) [a2cbf3be]', () => {
        const solution = users => users
            .filter(({ softSkills, address }) =>
                softSkills && softSkills.includes('Friendly') &&
                address && address.endsWith('France')
            )
            .map(user => ({ ...user, lastName: `${user.lastName.charAt(0)}.` }))

        expect(d(users)).toEqual(solution(users))
    })

    test('e) Return the average score of users having at least 2 soft skills [f0a56044]', () => {
        const solution = users => {
            const filtered = users.filter(({ softSkills }) => softSkills && softSkills.length >= 2)
            const total = filtered.reduce((total, { score }) => total + score, 0)

            return total / filtered.length
        }

        expect(e(users)).toEqual(solution(users))
    })

})
