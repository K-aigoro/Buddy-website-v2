// eslint-disable-next-line no-unused-vars
import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import "./trending.css";

function Trending() {
  return (
    <div className="trending">
        <h2>Trending Posts</h2>
        <div className="post_cards">
          <div className="post_card">
            <h3 className="post_card_h3">8 Upcoming Influencer Marketing Trends and Benefits</h3>
            <p className="post_card_p">
              Marketing is evolving. Its changing from a one-way street to a
              two-way conversa…
            </p>
            <div className="reactions">
              <div className="reactions__love">
                <AiFillHeart />
                <p>260</p>
              </div>
              <div className="reactions__love">
                <BiCommentDetail />
                <p>234</p>
              </div>
              <div className="reactions__love">
                <IoMdShareAlt />
                <p>123</p>
              </div>
            </div>
          </div>
          <div className="post_card">
            <h3 className="post_card_h3">How Influencer Marketing Affects Consumer Buying Behavior</h3>
            <p className="post_card_p">
              As influencer marketing continues to grow, consumers have been
              turning to their…
            </p>
            <div className="reactions">
              <div className="reactions__love">
                <AiFillHeart />
                <p>260</p>
              </div>
              <div className="reactions__love">
                <BiCommentDetail />
                <p>234</p>
              </div>
              <div className="reactions__love">
                <IoMdShareAlt />
                <p>123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Trending;