(function() {
  // 获取窗口的宽度和高度
  var PageX = window.innerWidth,
      PageY = window.innerHeight,
      snowflakes = [];

  // 雪花构造函数
  function Snowflake(x, y, xspeed, yspeed, size) {
      this.node = document.createElement('div');
      this.x = x;
      this.y = y;
      this.xspeed = xspeed;
      this.yspeed = yspeed;
      this.size = size;
      this.createSnowflake = function() {
          this.node.style.position = 'absolute';
          this.node.style.top = this.y + 'px';
          this.node.style.left = this.x + 'px';
          this.node.style.backgroundColor = 'rgba(173, 216, 230, 0.8)'; // 淡蓝色
          this.node.style.width = this.size + 'px';
          this.node.style.height = this.size + 'px';
          this.node.style.borderRadius = '50%';
          this.node.style.opacity = Math.random() * 0.8 + 0.2; // 设置雪花透明度
          document.body.appendChild(this.node);
      };
      this.createSnowflake();
      this.moveSnowflake = function() {
          // 移动雪花
          this.node.style.top = (parseInt(this.node.style.top) + this.yspeed) + 'px';
          this.node.style.left = (parseInt(this.node.style.left) + this.xspeed) + 'px';
          this.node.style.transform = 'scale(' + (this.size / 20) + ')';
      };
  }

  // 创建雪花
  function createSnowflake() {
      snowflakes.push(new Snowflake(
          Math.random() * PageX,
          -50,
          Math.random() * 0.5 - 0.25,
          1 + Math.random(),
          10 + Math.random() * 20
      ));
  }

  // 移动雪花
  function moveSnowflakes() {
      for (var i = 0; i < snowflakes.length; i++) {
          snowflakes[i].moveSnowflake();
          // 移除离开窗口的雪花
          if (parseInt(snowflakes[i].node.style.top) > PageY ||
              parseInt(snowflakes[i].node.style.left) > PageX ||
              parseInt(snowflakes[i].node.style.left) < 0) {
              snowflakes[i].node.parentNode.removeChild(snowflakes[i].node);
              snowflakes.splice(i, 1);
              i--;
          }
      }
  }

  // 初始化雪花效果
  function initSnow() {
      setInterval(createSnowflake, 200); // 每200毫秒创建一个雪花
      setInterval(moveSnowflakes, 20); // 每20毫秒移动一次雪花
  }

  // 启动效果
  window.onload = initSnow;
})();
