<template>
    <div>
        <h2>Experience Breakpoints</h2>
        <table>
            <tbody>
                <tr>
                    <th>1 - 20</th>
                    <td>{{ xpTo20 | number }}</td>
                    <th>1 - 40</th>
                    <td>{{ xpTo40 | number }}</td>
                    <th>1 - 60</th>
                    <td>{{ xpTo60 | number }}</td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
  export default {
    name: 'Breakpoints',
    props: {
      xp: Object,
    },
    computed: {
      xpTo20 () {
        return this.calculateXPtoLevel(20)
      },
      xpTo40 () {
        return this.calculateXPtoLevel(40)
      },
      xpTo60 () {
        return this.calculateXPtoLevel(60)
      },
    },
    methods: {
      calculateXPtoLevel (level) {
        let i = 1
        let xpReq = 0
        while (i < level) {
          xpReq += this.xp[i]
          i++
        }
        return xpReq
      }
    }
  }
</script>

<style scoped>

</style>