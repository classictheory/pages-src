<template>
    <div>
        <h2>Experience Breakpoints</h2>
        <table>
            <thead>
                <tr>
                    <th>1 - 20</th>
                    <th>1 - 40</th>
                    <th>1 - 60</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ xpTo20 | number }}</td>
                    <td>{{ xpTo40 | number }}</td>
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