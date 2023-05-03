/*
 * Test that basic SDK usage (init, capture, etc) does not
 * blow up in non-browser (node.js) envs. These are not
 * tests of server-side capturing functionality (which is
 * currently not supported in the browser lib).
 */

import { _copyAndTruncateStrings, _info, loadScript } from '../utils'

describe(`utils.js`, () => {
    it('should have $host and $pathname in properties', () => {
        const properties = _info.properties()
        expect(properties['$current_url']).toBeDefined()
        expect(properties['$host']).toBeDefined()
        expect(properties['$pathname']).toBeDefined()
    })
})

describe('_.copyAndTruncateStrings', () => {
    given('subject', () => _copyAndTruncateStrings(given.target, given.maxStringLength))

    given('target', () => ({
        key: 'value',
        [5]: 'looongvalue',
        nested: {
            keeeey: ['vaaaaaalue', 1, 99999999999.4],
        },
    }))
    given('maxStringLength', () => 5)

    it('truncates objects', () => {
        expect(given.subject).toEqual({
            key: 'value',
            [5]: 'looon',
            nested: {
                keeeey: ['vaaaa', 1, 99999999999.4],
            },
        })
    })

    it('makes a copy', () => {
        const copy = given.subject

        given.target.foo = 'bar'

        expect(copy).not.toEqual(given.target)
    })

    it('does not truncate when passed null', () => {
        given('maxStringLength', () => null)

        expect(given.subject).toEqual(given.subject)
    })

    it('handles recursive objects', () => {
        given('target', () => {
            const object = { key: 'vaaaaalue', values: ['fooobar'] }
            object.values.push(object)
            object.ref = object
            return object
        })

        expect(given.subject).toEqual({ key: 'vaaaa', values: ['fooob', undefined] })
    })

    it('does not truncate the apm raw performance property', () => {
        const original = {
            $performance_raw: 'longer_than_the_maximum',
        }
        given('target', () => original)

        expect(given.subject).toEqual(original)
    })

    it('handles frozen objects', () => {
        const original = Object.freeze({ key: 'vaaaaalue' })
        given('target', () => original)

        expect(given.subject).toEqual({ key: 'vaaaa' })
    })
})

describe('_.info', () => {
    given('subject', () => _info)

    it('deviceType', () => {
        const deviceTypes = {
            // iPad
            'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25':
                'Tablet',
            // Samsung tablet
            'Mozilla/5.0 (Linux; Android 7.1.1; SM-T555 Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.96 Safari/537.36':
                'Tablet',
            // Windows Chrome
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36':
                'Desktop',
            // Mac Safari
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A':
                'Desktop',
            // iPhone
            'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1':
                'Mobile',
            // LG Android
            'Mozilla/5.0 (Linux; Android 6.0; LG-H631 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/38.0.2125.102 Mobile Safari/537.36':
                'Mobile',
        }

        for (const [userAgent, deviceType] of Object.entries(deviceTypes)) {
            expect(given.subject.deviceType(userAgent)).toEqual(deviceType)
        }
    })

    it('properties', () => {
        const properties = given.subject.properties()

        expect(properties['$lib']).toEqual('web')
        expect(properties['$device_type']).toEqual('Desktop')
    })
})

describe('loadScript', () => {
    beforeEach(() => {
        document.getElementsByTagName('html')[0].innerHTML = ''
    })

    it('should insert the given script before the one already on the page', () => {
        document.body.appendChild(document.createElement('script'))
        const callback = jest.fn()
        loadScript('https://fake_url', callback)
        const scripts = document.getElementsByTagName('script')
        const new_script = scripts[0]

        expect(scripts.length).toBe(2)
        expect(new_script.type).toBe('text/javascript')
        expect(new_script.src).toBe('https://fake_url/')
        new_script.onload('test')
        expect(callback).toHaveBeenCalledWith(undefined, 'test')
    })

    it("should add the script to the page when there aren't any preexisting scripts on the page", () => {
        const callback = jest.fn()
        loadScript('https://fake_url', callback)
        const scripts = document.getElementsByTagName('script')
        const new_script = scripts[0]

        expect(scripts.length).toBe(1)
        expect(new_script.type).toBe('text/javascript')
        expect(new_script.src).toBe('https://fake_url/')
    })

    it('should respond with an error if one happens', () => {
        const callback = jest.fn()
        loadScript('https://fake_url', callback)
        const scripts = document.getElementsByTagName('script')
        const new_script = scripts[0]

        new_script.onerror('uh-oh')
        expect(callback).toHaveBeenCalledWith('uh-oh')
    })
})
