<template>
  <div class="wraper">
    <ul class="content">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
      <li>51</li>
      <li>52</li>
      <li>53</li>
      <li>54</li>
      <li>55</li>
      <li>56</li>
      <li>57</li>
      <li>58</li>
      <li>59</li>
      <li>60</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "Category",
    data () {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(document.querySelector(".wraper"), {
        probeType: 2,
        pullUpLoad: true
      }),
      this.scroll.on("scroll", (position) => {
        // console.log(position);
      })
      this.scroll.on("pullingUp", () => {
          console.log("发送网络请求");
        setTimeout(()=>{
          this.scroll.finishPullUp()
        }, 1000)
      
      })
    }
  }
</script>

<style scoped>
.wraper {
  height: 260px;
  background-color: red;
  overflow: hidden;
}
</style>
